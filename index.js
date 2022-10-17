// const devsArray = ["Adam", "Jacin", "Emily", "Abisha", "Alexus", "Nay"];

// for(let i = 0; i < 6; i++){
//     console.log( devsArray[i] + " is a junior front end web developer.");
// }

// devsArray.forEach(item => console.log(item + " is a junior front end web developer."))

// const alphaUpperArr = ['a', 'b', 'c', 'd', 'e', 'f'];

// for(let i = 0; i < alphaUpperArr.length; i++){
//     alphaUpperArr[i] = alphaUpperArr[i].toUpperCase();
// }

// console.log(alphaUpperArr);






/* 
    Scope
*/

// let i = "I'm the i outside of the loops.";
// console.log(i);
// for (let i = 0; i <10; i++){
//     console.log('Outer loop i is ' + i);
//     for (let i = 0; i < 10; i++){
//         console.log('Inner loop i is ' + i);
//     }
// }

/* 
    Hoisting 
*/

// myBool = true;

// if(myBool){
//     console.log('Hoisted!');
// } else {
//     console.log('Not hoisted!');
// }

// var myBool;


// console.log(addThis(1,2));

// function addThis(num1, num2) {
//     return num1 + num2;
// }

/* 
    Array methods
*/

// const devsArray = ["Adam", "Emily", "Teka",  "Latisha", "Mohamed", "Aisha"];

/*
  forEach()
*/

// for(let i = 0; i < 6; i++){
//     console.log(devsArray[i] + " is a junior front end web developer.");
// }

// devsArray.forEach(item => console.log(item + " is a junior front end web developer."));

/*
  map()
*/

// const myCallback = (dev) => dev + " is a junior front end web developer.";

// const myNewArray = devsArray.map((dev) => dev + " is a junior front end web developer.");
// console.log(myNewArray);

/*
  filter()
*/

// const myANameArray = devsArray.filter(dev => dev[0]==="A" ? true: false);
// console.table(myANameArray);

/*
  reduce()
*/

// let myReducedArray = devsArray.reduce((allNames, currentDev) => {
//     if(allNames.length === 0){
//         allNames = currentDev;
//         return allNames;
//     }

//     allNames += " and " + currentDev;
//     return allNames;
// });

// console.log(myReducedArray);

/*
  join()
*/

// console.log(devsArray.join(', '));

/*
  slice vs splice
*/

// console.log(devsArray.slice(3,4));
// console.log(devsArray);

