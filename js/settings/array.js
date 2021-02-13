import {
  rowsArray,
  colsArray,
  subsetRowArrays,
  subsetColArrays,
  concatRowArray,
  concatColArray,
} from './variables.js';
import { boxArrays } from './variables.js';
import { boxEmptyArrays } from './variables.js';
import { uniqueArr } from './variables.js';

let emptyObj = {};
const createArr = (boxesArr) => {
  // create box Array

  boxesArr.forEach((box, index) => {
    let boxName = box;
    let boxNumberArr = [];
    let boxEArr = [];
    boxArrays[index] = [];
    boxEmptyArrays[index] = [];
    boxNumberArr = boxArrays[index];
    boxEArr = boxEmptyArrays[index];

    emptyObj = {};

    boxName.forEach((el) => {
      if (el.innerHTML !== '') {
        boxNumberArr.push(Number(el.innerHTML));
      } else {
        emptyObj = {
          cell: el.parentElement.id,
          numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
        boxEArr.push(emptyObj);
      }
    });
  });

  return [boxArrays, boxEmptyArrays];
};

// create rowArray
const createRowArray = (rowArr) => {
  rowArr.forEach((row, index) => {
    rowsArray[index] = [];
    let rowArr = rowsArray[index];
    row.forEach((number) => {
      if (number.innerHTML !== '') {
        rowArr.push(Number(number.innerHTML));
      }
    });
  });
  return rowsArray;
};

// create colArray
const createColArray = (colArr) => {
  colArr.forEach((col, index) => {
    colsArray[index] = [];
    let colArr = colsArray[index];
    col.forEach((number) => {
      if (number.innerHTML !== '') {
        colArr.push(Number(number.innerHTML));
      }
    });
  });

  return colsArray;
};

// ! subset

// create subset concat Array
let uniqueObj = {};
let uniqueArrFinder = [];
const subsetUniqueCountArray = async (cellArr) => {
  uniqueObj = {};
  uniqueArrFinder = [];

  //   concat array
  let arr = [];
  cellArr.forEach((box, index) => {
    let uniqueCell = [];

    uniqueArr[index] = [];
    uniqueCell = uniqueArr[index];
    box.forEach((el) => {
      uniqueCell = uniqueCell.concat(el.numbers);
    });
    arr.push(uniqueCell);
  });

  //   get subset total
  for (let i = 0; i < arr.length; i++) {
    uniqueObj = {};
    let uniqueCount = [];
    uniqueCount = [];
    uniqueCount = arr[i];
    uniqueCount.forEach((i) => {
      uniqueObj[i] = (uniqueObj[i] || 0) + 1;
    });
    uniqueArrFinder.push(uniqueObj);
  }

  return uniqueArrFinder;
};

let concatArrays = [];
const concatArr = async (cellArr) => {
  concatArrays = [];
  cellArr.forEach((box) => {
    box.forEach((num) => {
      concatArrays = concatArrays.concat(num);
    });
  });

  // console.log(concatArrays);
  return concatArrays;
};

let subsetColArr = [];
let colArr = [];
// create subsetColArray
const createSubsetColArray = async (cellArr) => {
  colArr = [];
  colArr = await concatArr(cellArr);

  concatColArray.forEach((el, index) => {
    concatColArray[index] = [];
  });

  subsetColArr = [];
  colArr.forEach((el, index) => {
    let getCol = +el.cell[2] - 1;
    concatColArray[getCol].push(el);
  });

  return concatColArray;
};

let subsetRowArr = [];
let rowArr = [];
// create subsetRowArray
const createSubsetRowArray = async (cellArr) => {
  rowArr = [];
  rowArr = await concatArr(cellArr);

  concatRowArray.forEach((el, index) => {
    concatRowArray[index] = [];
  });

  subsetRowArr = [];
  rowArr.forEach((el) => {
    let getRow = +el.cell[1] - 1;
    concatRowArray[getRow].push(el);
  });

  return concatRowArray;
};

export {
  createArr,
  createRowArray,
  createColArray,
  createSubsetRowArray,
  createSubsetColArray,
  subsetUniqueCountArray,
};
