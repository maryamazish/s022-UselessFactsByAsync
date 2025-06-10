const array = [1, 2, 3];
const [f1, f2] = array;
console.log(f1, f2);

const obj = {
  name: "jay",
  age: 31,
};

//باید هم نام یکی از کلیدهای آبجکتمون باشد
const { age } = obj;
console.log(age);

const objarr = [
  {
    name: "jay",
    age: 31,
  },
  {
    name: "Mar",
    age: 31,
  },
];

const [{ jay }] = objarr;
console.log(jay);

