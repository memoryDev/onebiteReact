function funcA() {
  console.log("funA");
}

let varA = funcA;

let varB = function () {
  console.log("funB");
};

funcA();
varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

console.log(varC());
