// box1
const X11 = document.getElementById('X11').lastChild;
const X12 = document.getElementById('X12').lastChild;
const X13 = document.getElementById('X13').lastChild;
const X21 = document.getElementById('X21').lastChild;
const X22 = document.getElementById('X22').lastChild;
const X23 = document.getElementById('X23').lastChild;
const X31 = document.getElementById('X31').lastChild;
const X32 = document.getElementById('X32').lastChild;
const X33 = document.getElementById('X33').lastChild;

// box2
const X41 = document.getElementById('X41').lastChild;
const X42 = document.getElementById('X42').lastChild;
const X43 = document.getElementById('X43').lastChild;
const X51 = document.getElementById('X51').lastChild;
const X52 = document.getElementById('X52').lastChild;
const X53 = document.getElementById('X53').lastChild;
const X61 = document.getElementById('X61').lastChild;
const X62 = document.getElementById('X62').lastChild;
const X63 = document.getElementById('X63').lastChild;

// box3
const X71 = document.getElementById('X71').lastChild;
const X72 = document.getElementById('X72').lastChild;
const X73 = document.getElementById('X73').lastChild;
const X81 = document.getElementById('X81').lastChild;
const X82 = document.getElementById('X82').lastChild;
const X83 = document.getElementById('X83').lastChild;
const X91 = document.getElementById('X91').lastChild;
const X92 = document.getElementById('X92').lastChild;
const X93 = document.getElementById('X93').lastChild;

// box4
const X14 = document.getElementById('X14').lastChild;
const X15 = document.getElementById('X15').lastChild;
const X16 = document.getElementById('X16').lastChild;
const X24 = document.getElementById('X24').lastChild;
const X25 = document.getElementById('X25').lastChild;
const X26 = document.getElementById('X26').lastChild;
const X34 = document.getElementById('X34').lastChild;
const X35 = document.getElementById('X35').lastChild;
const X36 = document.getElementById('X36').lastChild;

// box5
const X44 = document.getElementById('X44').lastChild;
const X45 = document.getElementById('X45').lastChild;
const X46 = document.getElementById('X46').lastChild;
const X54 = document.getElementById('X54').lastChild;
const X55 = document.getElementById('X55').lastChild;
const X56 = document.getElementById('X56').lastChild;
const X64 = document.getElementById('X64').lastChild;
const X65 = document.getElementById('X65').lastChild;
const X66 = document.getElementById('X66').lastChild;

// box6
const X74 = document.getElementById('X74').lastChild;
const X75 = document.getElementById('X75').lastChild;
const X76 = document.getElementById('X76').lastChild;
const X84 = document.getElementById('X84').lastChild;
const X85 = document.getElementById('X85').lastChild;
const X86 = document.getElementById('X86').lastChild;
const X94 = document.getElementById('X94').lastChild;
const X95 = document.getElementById('X95').lastChild;
const X96 = document.getElementById('X96').lastChild;

// box7
const X17 = document.getElementById('X17').lastChild;
const X18 = document.getElementById('X18').lastChild;
const X19 = document.getElementById('X19').lastChild;
const X27 = document.getElementById('X27').lastChild;
const X28 = document.getElementById('X28').lastChild;
const X29 = document.getElementById('X29').lastChild;
const X37 = document.getElementById('X37').lastChild;
const X38 = document.getElementById('X38').lastChild;
const X39 = document.getElementById('X39').lastChild;

// box8
const X47 = document.getElementById('X47').lastChild;
const X48 = document.getElementById('X48').lastChild;
const X49 = document.getElementById('X49').lastChild;
const X57 = document.getElementById('X57').lastChild;
const X58 = document.getElementById('X58').lastChild;
const X59 = document.getElementById('X59').lastChild;
const X67 = document.getElementById('X67').lastChild;
const X68 = document.getElementById('X68').lastChild;
const X69 = document.getElementById('X69').lastChild;

// box9
const X77 = document.getElementById('X77').lastChild;
const X78 = document.getElementById('X78').lastChild;
const X79 = document.getElementById('X79').lastChild;
const X87 = document.getElementById('X87').lastChild;
const X88 = document.getElementById('X88').lastChild;
const X89 = document.getElementById('X89').lastChild;
const X97 = document.getElementById('X97').lastChild;
const X98 = document.getElementById('X98').lastChild;
const X99 = document.getElementById('X99').lastChild;

// variables
const variables = [
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
];

// Arrays

const box1VariablesArr = [X11, X12, X13, X21, X22, X23, X31, X32, X33];
const box2VariablesArr = [X41, X42, X43, X51, X52, X53, X61, X62, X63];
const box3VariablesArr = [X71, X72, X73, X81, X82, X83, X91, X92, X93];
const box4VariablesArr = [X14, X15, X16, X24, X25, X26, X34, X35, X36];
const box5VariablesArr = [X44, X45, X46, X54, X55, X56, X64, X65, X66];
const box6VariablesArr = [X74, X75, X76, X84, X85, X86, X94, X95, X96];
const box7VariablesArr = [X17, X18, X19, X27, X28, X29, X37, X38, X39];
const box8VariablesArr = [X47, X48, X49, X57, X58, X59, X67, X68, X69];
const box9VariablesArr = [X77, X78, X79, X87, X88, X89, X97, X98, X99];

//  boxes Array
const boxesArr = [
  box1VariablesArr,
  box2VariablesArr,
  box3VariablesArr,
  box4VariablesArr,
  box5VariablesArr,
  box6VariablesArr,
  box7VariablesArr,
  box8VariablesArr,
  box9VariablesArr,
];

// console.log(typeof Number(X12.innerHTML));
// row Arrays
const row1Arr = [X11, X12, X13, X14, X15, X16, X17, X18, X19];
const row2Arr = [X21, X22, X23, X24, X25, X26, X27, X28, X29];
const row3Arr = [X31, X32, X33, X34, X35, X36, X37, X38, X39];
const row4Arr = [X41, X42, X43, X44, X45, X46, X47, X48, X49];
const row5Arr = [X51, X52, X53, X54, X55, X56, X57, X58, X59];
const row6Arr = [X61, X62, X63, X64, X65, X66, X67, X68, X69];
const row7Arr = [X71, X72, X73, X74, X75, X76, X77, X78, X79];
const row8Arr = [X81, X82, X83, X84, X85, X86, X87, X88, X89];
const row9Arr = [X91, X92, X93, X94, X95, X96, X97, X98, X99];

// col Arrays
const col1Arr = [X11, X21, X31, X41, X51, X61, X71, X81, X91];
const col2Arr = [X12, X22, X32, X42, X52, X62, X72, X82, X92];
const col3Arr = [X13, X23, X33, X43, X53, X63, X73, X83, X93];
const col4Arr = [X14, X24, X34, X44, X54, X64, X74, X84, X94];
const col5Arr = [X15, X25, X35, X45, X55, X65, X75, X85, X95];
const col6Arr = [X16, X26, X36, X46, X56, X66, X76, X86, X96];
const col7Arr = [X17, X27, X37, X47, X57, X67, X77, X87, X97];
const col8Arr = [X18, X28, X38, X48, X58, X68, X78, X88, X98];
const col9Arr = [X19, X29, X39, X49, X59, X69, X79, X89, X99];

const rowArrays = [
  row1Arr,
  row2Arr,
  row3Arr,
  row4Arr,
  row5Arr,
  row6Arr,
  row7Arr,
  row8Arr,
  row9Arr,
];

const colArrays = [
  col1Arr,
  col2Arr,
  col3Arr,
  col4Arr,
  col5Arr,
  col6Arr,
  col7Arr,
  col8Arr,
  col9Arr,
];

// empty arrays
let boxArrays = [];
let box1Arr = [];
let box2Arr = [];
let box3Arr = [];
let box4Arr = [];
let box5Arr = [];
let box6Arr = [];
let box7Arr = [];
let box8Arr = [];
let box9Arr = [];

boxArrays = [
  box1Arr,
  box2Arr,
  box3Arr,
  box4Arr,
  box5Arr,
  box6Arr,
  box7Arr,
  box8Arr,
  box9Arr,
];

let boxEmptyArrays = [];
let boxEmpty1Arr = [];
let boxEmpty2Arr = [];
let boxEmpty3Arr = [];
let boxEmpty4Arr = [];
let boxEmpty5Arr = [];
let boxEmpty6Arr = [];
let boxEmpty7Arr = [];
let boxEmpty8Arr = [];
let boxEmpty9Arr = [];

boxEmptyArrays = [
  boxEmpty1Arr,
  boxEmpty2Arr,
  boxEmpty3Arr,
  boxEmpty4Arr,
  boxEmpty5Arr,
  boxEmpty6Arr,
  boxEmpty7Arr,
  boxEmpty8Arr,
  boxEmpty9Arr,
];

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

export {
  rowsArray,
  colsArray,
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
  variables,
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
};
