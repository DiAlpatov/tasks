// 1. Написать рекурсивную функцию возведения в степень. На вход принимать число и его степень, на выходе выдавать рассчитанное значение.

let number = +prompt("Enter your number", 0);
// let degree = +prompt("Enter degree", 0);

// let getNumber = (num,deg) => {
//   if(deg == 1){
//     return num;
//   } else {
//     return num*getNumber(num, deg-1);
//   }
// }

// let showResult = getNumber(number, degree);
// console.log(showResult);



//2. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. 
// Встроенный метод массивов flat использовать нельзя.
// Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let oldArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// let combineArray = (arr) => {
//   let newArray = []
//   for(let value of arr){
//     if(typeof value == 'object'){
//       newArray.push(...combineArray(value))
//     } else {
//       newArray.push(value)
//     }
//   }
//   return newArray;
// }

// let showResult = combineArray(oldArray);
// console.log(showResult);



//3.

let num = +prompt("vvedite")

function numLetters(num, d) {
  k = num.toString();
  let i = ''
  let arr1 = [
    ['', 'тысяч'],
    ['a', 'и', ''],
    ['', 'a', 'ов']
  ];

  k = k.split(/(?=(?:\d{3})+$)/); // дробим число на на подмассивы = 3

  if (k[0].length == 1) {
    k[0] = '00' + k[0];

  }
  if (k[0].length == 2) {
    k[0] = '0' + k[0];
  }
  for (let j = (k.length - 1); j >= 0; j--) { // соединяем дробленые числа в одно с названием прописью и окончание(decOfNum)

    if (k[j] != '000') {

      i = (((d && j == (k.length - 1)) || j == (k.length - 2)) && (k[j][2] == '1' || k[j][2] == '2') ? t(k[j], 1) : t(k[j])) + declOfNum(k[j], arr1[0][k.length - 1 - j], (j == (k.length - 2) ? arr1[1] : arr1[2])) + i;
    }
  }

  function t(k, d) {  //k=num
    let arr2 = [
      ['', ' один', ' два', ' три', ' четыре', ' пять', ' шесть', ' семь', ' восемь', ' девять'],
      [' десять', ' одиннадцать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать', ' семнадцать', ' восемнадцать', ' девятнадцать'],
      ['', '', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' шестьдесят', ' семьдесят', ' восемьдесят', ' девяносто'],
      ['', ' сто', ' двести', ' триста', ' четыреста', ' пятьсот', ' шестьсот', ' семьсот', ' восемьсот', ' девятьсот'],
      ['', ' одна', ' две']
    ];
    return arr2[3][k[0]] + (k[1] == 1 ? arr2[1][k[2]] : arr2[2][k[1]] + (d ? arr2[4][k[2]] : arr2[0][k[2]]));   //  сто + двацать или 21  d+  два или две
  }
  return i;
}

function declOfNum(n, t, arr1) {
  let k = [2, 0, 1, 1, 1, 2, 2, 2, 2, 2];

  return (t == '' ? '' : ' ' + t + (n[n.length - 2] == "1" ? arr1[2] : arr1[k[n[n.length - 1]]]));

} console.log(numLetters(num));