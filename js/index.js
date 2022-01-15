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
for (let i = 0; i > hacker1.length; i++){
    const driversName = hacker1[i];
   
  }