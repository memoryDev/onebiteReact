// 1. 묵시적 형변환(자동형변환)
let num = 10;
let str = "20";
const result = num + str;
// console.log(result);

// 2. 명시적 형변환(개발자가 직접 지정해야함)
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);
