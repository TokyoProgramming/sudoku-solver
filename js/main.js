import { fillNumber, countFilledNumber } from '../js/fillingNumbers/basic.js';
import {
  createArr,
  createRowArray,
  createColArray,
} from '../js/settings/array.js';
import { boxesArr, rowArrays, colArrays } from '../js/settings/variables.js';

let arrayResult = [];
let rowResult = [];
let colResult = [];
let boxArr = [];
let cellArr = [];
let result = [];
let filledNumber = 0;

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
    if (filledNumberOld === filledNumber) {
      console.log(i);
      break;
    }
    filledNumberOld = filledNumber;
    i++;
  }

  return result;
};

main();
