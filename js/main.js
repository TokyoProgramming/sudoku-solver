const solve = document.getElementById('solve-button');
import { fillNumber, countFilledNumber } from '../js/fillingNumbers/basic.js';
import {
  createArr,
  createRowArray,
  createColArray,
  createSubsetRowArray,
  createSubsetColArray,
  subsetUniqueCountArray,
} from '../js/settings/array.js';
import { boxesArr, rowArrays, colArrays } from '../js/settings/variables.js';
import { subset, getSubsetPair } from '../js/fillingNumbers/subset.js';

let arrayResult = [];
let rowResult = [];
let colResult = [];
let boxArr = [];
let cellArr = [];
let result = [];
let filledNumber = 0;
let subsetRow = [];
let subsetCol = [];
let subsetPair = [];

const main = async () => {
  let i = 0;
  let filledNumberOld = 0;

  while (i < 100) {
    rowResult = createRowArray(rowArrays);
    colResult = createColArray(colArrays);
    arrayResult = createArr(boxesArr);

    boxArr = arrayResult[0];
    cellArr = arrayResult[1];
    filledNumber = await countFilledNumber(boxArr);

    result = await fillNumber(cellArr, rowResult, colResult, boxArr);

    // subset box
    let subsetUniqueRes = await subsetUniqueCountArray(cellArr);

    await subset(cellArr, subsetUniqueRes);
    // subset row
    subsetRow = await createSubsetRowArray(cellArr);
    let subsetRowRes = await subsetUniqueCountArray(subsetRow);
    await subset(subsetRow, subsetRowRes);
    // subsetCol
    subsetCol = await createSubsetColArray(cellArr);
    let subsetColRes = await subsetUniqueCountArray(subsetCol);
    await subset(subsetCol, subsetColRes);

    if (filledNumberOld === filledNumber) {
      console.log('1');
      break;
    }

    filledNumberOld = filledNumber;
    i++;
  }

  // subset pair
  subsetPair = await subsetUniqueCountArray(cellArr);
  await getSubsetPair(subsetPair, cellArr);

  return result;
};

solve.addEventListener('click', main);
