import { rowsArray, colsArray } from './variables.js';
import { boxArrays } from './variables.js';
import { boxEmptyArrays } from './variables.js';

let emptyObj = {};
const createArr = (boxesArr) => {
  // create box Array

  boxesArr.forEach((box, index) => {
    let boxName = box;
    let boxNumberArr = [];
    let boxEArr = [];
    boxArrays[index] = [];
    boxEArr[index] = [];
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
    let colArr = colsArray[index];
    col.forEach((number) => {
      if (number.innerHTML !== '') {
        colArr.push(Number(number.innerHTML));
      }
    });
  });
  return colsArray;
};

export { createArr, createRowArray, createColArray };
