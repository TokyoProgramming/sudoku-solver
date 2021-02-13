import { uniqueArr } from '../settings/variables.js';
import { fillNumberToCel } from './basic.js';

const subset = async (cellArr, subsetUniqueRes) => {
  await subsetUnique(subsetUniqueRes, cellArr);
};

let cellNumberArr = [];
let cellNumberObj = {};
const subsetUnique = async (subsetUniqueRes, cellArr) => {
  cellNumberArr = [];
  cellNumberObj = {};

  // console.log(subsetUniqueRes);

  subsetUniqueRes.forEach((box, index) => {
    let count = Object.keys(box).length;
    for (let i = 0; i < count; i++) {
      let number = Object.keys(box)[i];

      if (box[number] === 1) {
        cellArr[index].forEach((el) => {
          if (el.numbers.includes(+number)) {
            cellNumberObj = {};
            cellNumberObj = {
              cellId: el.cell,
              number: number,
            };
            cellNumberArr.push(cellNumberObj);
          }
        });
      }
    }
  });

  await fillNumberToCel(cellNumberArr);
};

let subsetPairArr = [];
let subsetPairObj = {};
const getSubsetPair = async (subsetUniqueRes, cellArr) => {
  subsetPairArr = [];
  subsetPairObj = {};
  console.log(cellArr);

  cellArr.forEach((box, index) => {
    box.forEach((el) => {
      // console.log(el.numbers.length);
      if (el.numbers.length === 2) {
        console.log(index);
        console.log(el);
      }
    });
  });

  let duplicateArr = cellArr.some((item, index) => {
    return cellArr.indexOf(item) != index;
  });

  subsetUniqueRes.forEach((box, index) => {
    let pairCount = Object.keys(box).length;
    for (let j = 0; j < pairCount; j++) {
      let number = Object.keys(box)[j];
      // console.log(box[number]);

      if (box[number] === 2) {
      }
    }
  });
  console.log(subsetPairArr);
};

const subsetRow = async (cellArr, rowResult) => {
  console.log(cellArr);
  console.log(rowResult);
};
const subsetCol = async (cellArr, colResult) => {
  // find same col subset
  let sameColSubset = cellArr.forEach((el, index) => {
    console.log(index);
    console.log(el);
  });

  //   console.log(colResult);
};

export { subset, getSubsetPair };
