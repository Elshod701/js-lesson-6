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
