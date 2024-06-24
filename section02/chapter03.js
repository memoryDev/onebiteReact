// 1.배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
// console.log("one : " + one);
// console.log("two : " + two);
// console.log("three : " + three);

// 2.객체의 구조 분해 할당
let person = {
  name: "memoryDev",
  age: 27,
  hobby: "테니스",
};

let { name, age, hobby, extra = "hello" } = person;
// console.log(name, age, hobby, extra);

// 3. 객체 구조 분해 할당을 ㅇ용해서 함수으 매개 변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
