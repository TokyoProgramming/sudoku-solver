import { variables } from '../settings/variables.js';

const deleteNum = async (cellArr, rowColBoxArr) => {
  let newArr = [];
  newArr = cellArr.filter((el) => {
    return rowColBoxArr.indexOf(el) == -1;
  });
  return newArr;
};

const getPossibleNum = async (cellArr, rowArr, colArr, boxArr) => {
  let cellRowArr = [];
  let cellColArr = [];
  let cellBoxArr = [];
  let newArr = [];
  cellRowArr = await deleteNum(cellArr, rowArr);
  cellColArr = await deleteNum(cellRowArr, colArr);
  cellBoxArr = await deleteNum(cellColArr, boxArr);
  newArr = cellBoxArr;
  return newArr;
};

const reduceArray = async (cellArr, rowResult, colResult, boxArr) => {
  for (let j = 0; j < cellArr.length; j++) {
    for (let i = 0; i < cellArr[j].length; i++) {
      // console.log(i);
      let getRow = +cellArr[j][i].cell[1] - 1;
      let getCol = +cellArr[j][i].cell[2] - 1;

      let rowNumber = rowResult[getRow];
      let colNumber = colResult[getCol];
      let boxNumber = boxArr[j];

      let cellPosition = cellArr[j][i].numbers;

      let Result = await getPossibleNum(
        cellPosition,
        rowNumber,
        colNumber,
        boxNumber
      );
      cellArr[j][i].numbers = Result;
    }
  }
  return cellArr;
};

const getFillNumber = async (cellArr, rowResult, colResult, boxArr) => {
  const reducedRes = await reduceArray(cellArr, rowResult, colResult, boxArr);
  let fillArr = [];
  let fillObj = {};
  for (let i = 0; i < reducedRes.length; i++) {
    let arrayNum = reducedRes[i];
    const singleRes = arrayNum.filter((item) => {
      return item.numbers.length === 1;
    });
    if (singleRes.length !== 0) {
      singleRes.forEach((el) => {
        fillObj = {
          cell: el.cell,
          number: +el.numbers[0],
        };
        fillArr.push(fillObj);
      });
    }
  }
  return fillArr;
};

const getFillNumberCell = async (cellArr, rowResult, colResult, boxArr) => {
  const getRes = await getFillNumber(cellArr, rowResult, colResult, boxArr);
  let found = [];
  let finder = [];
  let finderObj = {};

  getRes.forEach((el) => {
    let targetCell = el.cell;
    found = variables.find((el) => el.parentElement.id === `${targetCell}`);
    finderObj = {
      cell: found.parentElement,
      number: el.number,
    };
    finder.push(finderObj);
  });

  return finder;
};

const fillNumber = async (cellArr, rowResult, colResult, boxArr) => {
  const foundRes = await getFillNumberCell(
    cellArr,
    rowResult,
    colResult,
    boxArr
  );
  foundRes.forEach((el) => {
    el.cell.lastChild.innerHTML = el.number;
  });

  return foundRes;
};
let countNum = 0;
const countFilledNumber = async (boxArr) => {
  countNum = 0;
  boxArr.forEach((el) => {
    countNum += el.length;
  });

  return countNum;
};

export { fillNumber, countFilledNumber };
