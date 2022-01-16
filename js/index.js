// Iteration 1: Names and Input

var hacker1 = 'Ezgi';
console.log(`The driver's name is ${hacker1}`);
var hacker2 = 'Andrés';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length === hacker2.length) {
  console.log('Wow, you both have equally long names, XX characters!.');
  }

// Iteration 3: Loops

// Iteration 3.1
const driversCaps = hacker1.toUpperCase()
let spacedName = '';
for (let i = 0; i < driversCaps.length; i++){
 spacedName += driversCaps[i] + ' ';

}
console.log(spacedName);

// Iteration 3.2


let reversedName = '';
for (let i = hacker2.length -1; i >= 0; i--){
 reversedName += hacker2[i];

}
console.log(reversedName);

// Iteration 3.3

if (hacker1 > hacker2){
  console.log("The driver's name goes first.")
}
else if (hacker2 > hacker1){
  console.log('Yo, the navigator goes first definitely.')
}

if (hacker1 === hacker2){
  console.log('What?! You both have the same name?')
}