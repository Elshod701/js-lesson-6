"use strict"; //to use modern javascript

// this //

// console.log(this); //global window

//this ni function turlari ichida chaqrisak nima bo'ladi?

// ################################################ //

//in function-declaration
//-use strict bilan - undefinded -
//-use strictsiz - window -
// function getThis() {
//   console.log(this);
// }
// getThis();

// ################################################ //

// arrow function
// use strict bo'lsa ham bo'lmasa ham thisni chaqirsak -window- chiqaveradi
// const arrow = () => console.log(this);
// arrow();

// ################################################ //

// function expression
// bu ham declaration bilan bir xil ishlaydi !
//-use strict bilan - undefinded -
//-use strictsiz - window -
// const getThis = function () {
//   console.log(this);
// };
// getThis();

// ################################################ //

// agar this objectni ichida kelsa console ga nima chiqadi
// const obj = {
//   isName: "Elshod",
//   getInfo: function () {
//     console.log(this.isName);
//   },
// };
// // this bu nimani ichida joylashgan bo'lsa shu objectni elementlarini olib beruvchi vosita
// obj.getInfo();

// ################################################ //
// constructor function = konstruktor - quruvchi

// bu qolip
function Car(brand, model, price, year) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.year = year;
}
// qolipni to'ldirish (instance)

const Kia_stinger = new Car("Kia", "Stinger GT", "75000 $", "2024");
const jentra = new Car("GM", "Jentra", "20000 $", "2023");

console.log(Kia_stinger);
console.log(jentra);
