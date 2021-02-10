import { arrayResult, rowResult, colResult } from './settings/array.js';

const boxArr = arrayResult[0];
const cellArr = arrayResult[1];

const deleteNum = (cellArr, rowColBoxArr) => {
  let newArr = [];
  newArr = cellArr.filter((el) => {
    return rowColBoxArr.indexOf(el) == -1;
  });
  return newArr;
};

const getPossibleNum = (cellArr, rowArr, colArr, boxArr) => {
  let cellRowArr = [];
  let cellColArr = [];
  let cellBoxArr = [];
  let newArr = [];
  cellRowArr = deleteNum(cellArr, rowArr);
  cellColArr = deleteNum(cellRowArr, colArr);
  cellBoxArr = deleteNum(cellColArr, boxArr);
  newArr = cellBoxArr;
  return newArr;
};

let cellArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rowArr1 = [1, 2];
let colArr1 = [3, 4];
let boxArr1 = [5, 6];

let res = getPossibleNum(cellArr1, rowArr1, colArr1, boxArr1);
// console.log(res);

// // getBox1
// console.log(boxArr[0]);
// // getRow1
// console.log(rowResult[0]);
// // getCol1
// console.log(colResult[0]);
// // getCell
// // box1's Cell
// console.log(cellArr[0]);
// console.log(cellArr[0].length);
for (let j = 0; j < cellArr.length; j++) {
  for (let i = 0; i < cellArr[j].length; i++) {
    // console.log(i);
    let getRow = +cellArr[j][i].cell[1] - 1;
    let getCol = +cellArr[j][i].cell[2] - 1;

    let rowNumber = rowResult[getRow];
    let colNumber = colResult[getCol];
    let boxNumber = boxArr[j];

    // console.log(rowNumber);
    // console.log(colNumber);
    // console.log(boxNumber);

    let cellPosition = cellArr[j][i].numbers;

    let Result = getPossibleNum(cellPosition, rowNumber, colNumber, boxNumber);
    // console.log('result');
    if (Result.length === 2) {
      console.log(Result);
    }
  }
}
