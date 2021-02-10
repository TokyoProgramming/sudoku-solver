import {
  boxEmptyArrays,
  boxEmpty1Arr,
  boxEmpty2Arr,
  boxEmpty3Arr,
  boxEmpty4Arr,
  boxEmpty5Arr,
  boxEmpty6Arr,
  boxEmpty7Arr,
  boxEmpty8Arr,
  boxEmpty9Arr,
  boxArrays,
  boxesArr,
  rowArrays,
  colArrays,
  col1Arr,
  col2Arr,
  col3Arr,
  col4Arr,
  col5Arr,
  col6Arr,
  col7Arr,
  col8Arr,
  col9Arr,
  row1Arr,
  row2Arr,
  row3Arr,
  row4Arr,
  row5Arr,
  row6Arr,
  row7Arr,
  row8Arr,
  row9Arr,
  box1Arr,
  box2Arr,
  box3Arr,
  box4Arr,
  box5Arr,
  box6Arr,
  box7Arr,
  box8Arr,
  box9Arr,
  box1VariablesArr,
  box2VariablesArr,
  box3VariablesArr,
  box4VariablesArr,
  box5VariablesArr,
  box6VariablesArr,
  box7VariablesArr,
  box8VariablesArr,
  box9VariablesArr,
  X11,
  X12,
  X13,
  X14,
  X15,
  X16,
  X17,
  X18,
  X19,
  X21,
  X22,
  X23,
  X24,
  X25,
  X26,
  X27,
  X28,
  X29,
  X31,
  X32,
  X33,
  X34,
  X35,
  X36,
  X37,
  X38,
  X39,
  X41,
  X42,
  X43,
  X44,
  X45,
  X46,
  X47,
  X48,
  X49,
  X51,
  X52,
  X53,
  X54,
  X55,
  X56,
  X57,
  X58,
  X59,
  X61,
  X62,
  X63,
  X64,
  X65,
  X66,
  X67,
  X68,
  X69,
  X71,
  X72,
  X73,
  X74,
  X75,
  X76,
  X77,
  X78,
  X79,
  X81,
  X82,
  X83,
  X84,
  X85,
  X86,
  X87,
  X88,
  X89,
  X91,
  X92,
  X93,
  X94,
  X95,
  X96,
  X97,
  X98,
  X99,
} from './variables.js';

const createArr = (boxesArr, boxArrays, boxEmptyArrays) => {
  // create box Array
  boxesArr.forEach((box, index) => {
    let boxName = box;
    let boxNumberArr = [];
    let boxEArr = [];
    boxNumberArr = boxArrays[index];
    boxEArr = boxEmptyArrays[index];
    let obj = {};
    let emptyObj = {};

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

let row1Array = [];
let row2Array = [];
let row3Array = [];
let row4Array = [];
let row5Array = [];
let row6Array = [];
let row7Array = [];
let row8Array = [];
let row9Array = [];

let rowsArray = [
  row1Array,
  row2Array,
  row3Array,
  row4Array,
  row5Array,
  row6Array,
  row7Array,
  row8Array,
  row9Array,
];

let col1Array = [];
let col2Array = [];
let col3Array = [];
let col4Array = [];
let col5Array = [];
let col6Array = [];
let col7Array = [];
let col8Array = [];
let col9Array = [];

let colsArray = [
  col1Array,
  col2Array,
  col3Array,
  col4Array,
  col5Array,
  col6Array,
  col7Array,
  col8Array,
  col9Array,
];

// create rowArray
const createRowArray = (rowArr) => {
  rowArr.forEach((row, index) => {
    let rowArr = rowsArray[index];
    row.forEach((number) => {
      if (number.innerHTML !== '') {
        // console.log(number.innerHTML);
        rowArr.push(Number(number.innerHTML));
      }
    });
  });
  return rowsArray;
};

let rowResult = createRowArray(rowArrays);

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

let colResult = createColArray(colArrays);

let arrayResult = createArr(boxesArr, boxArrays, boxEmptyArrays);

export { arrayResult, rowResult, colResult };
