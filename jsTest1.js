// 1) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. 
// Если у одной строки с последующей первый и последний символы, то true. 
// Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]

// let arrayString = ["asd", "afffd", "cc", "kk"]

// let checkString = (arr) => {
//   let boollArray = []
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i][0] === arr[i + 1][0] && arr[i][arr[i].length - 1] === arr[i + 1][arr[i + 1].length - 1]) {
//       boollArray.push(true)
//     } else {
//       boollArray.push(false)
//     }
//   }
//   return boollArray
// }

// let showResult = checkString(arrayString);
// console.log(showResult);



//2Дана матрица [[1, 2, 3, 2, 3, 7, 9], [4, 5, 6, 5, 7, 8, 9], [7, 8, 9, 4, 6, 3, 1]](Это к примеру. 
//Точную не помню). дальше берется матрица 3х3 и идет по этой матрице сдвигаясь на один столбец на каждой итерации. 
//Функция должна вернуть массив булевых значений. Если в матрице 3х3 цифры не повторяются, то true.

let matrix = [[1, 2, 3, 2, 3, 7, 9], 
              [4, 5, 6, 5, 7, 8, 9], 
              [7, 8, 9, 4, 6, 3, 1]];

let func = (m) => {
  let boolArr = []
 mark: for (i = 0; i < m[0].length; i++) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      for (let k = i, a = 0; a < 3; a++, k++) {
        if (arr.includes(m[j][k])){
          boolArr.push(false)
          continue mark;
        }
        arr.push(m[j][k]);
      } 
    }
    boolArr.push(true)
    console.log(m[i][j]);
  }
  return boolArr
}
console.log(func(matrix))