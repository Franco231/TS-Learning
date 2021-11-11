console.log('Your code goes here.....!!! READY');

/*
Core types

number 1, 5.3, -10 
string 'Hi', "Hi", `Hi`
boolean true,false
*/

// function add(n1,n2) {
//     return n1 + n2;
// }
// const result = add(number1,number2)
// console.log (`Output is ${result} oh no this is wrong. This is not using core type TS`);

// Typescript version to help us convert a string to a number.

function add2(n1: number,n2:number,showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error ('Incorrect input!')
    // }
    const results = n1 + n2;
    if(showResult){
        console.log (phrase + results)
    } else {
        return n1 + n2;
    }
}


const number1 = 5;
const number2 = 1000;
const printResult = true;
const resultPhrase = `Your Results is:`;

add2(number1, number2, printResult, resultPhrase);
