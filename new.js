let email=prompt("Enter the mail");
const len=email.length;
const dotInd=email.lastIndexOf('.');
const atInd=email.lastIndexOf('@');
const lastInd=len-1;
if(len<11||(lastInd-dotInd)>3||(lastInd-dotInd)<2||(dotInd-atInd)<3){
    console.log("Invalid Email");
}else{
    console.log("Valid");
}

// console.log('JavaScript New')
// /* Data Types
//     1. Object
//     2. Primitive Datatypes
// */

// /* *********************************** *
// ***        Primitive DataTypes       ***
// /* *********************************** */

// // Number (64 bit)

// let num = 10;
// console.log(typeof num);

// // String
// const firstName = "falak's book";
// const lastname = 'Chandni';
// const nickName = `Tom`;

// console.log(typeof firstName);
// console.log(typeof lastname);
// console.log(typeof nickName);

// // Boolean
//let boolnew=true;
// let bool = false;
// console.log(typeof bool);

// // Undefined
// let abc;
// console.log(typeof abc);
// console.log(abc);

// // Null
// let b = null;
// console.log(b);
// console.log(typeof b);

// // Symbol(ES6/2015)

// // BigInt(ES2020)
// let num1 = 10n;
// console.log(typeof num1);

// let num3=Infinity;
// console.log(num3/num3);
// let aa='10'/5
// console.log(typeof aa);
// console.log(10);
// console.log(Number('10.5'+5));
// */


