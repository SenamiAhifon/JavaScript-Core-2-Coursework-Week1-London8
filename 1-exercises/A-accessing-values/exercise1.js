/*
  This object has 4 properties
  The properties of the object are all primitive types (string, number or boolean)
  What is the type of each property?
*/

let dog = {
  breed: "Dalmatian",
  name: "Spot",
  isHungry: true,
  happiness: 6
};

console.log(typeof dog.breed);
console.log(typeof dog.name);
console.log(typeof dog.isHungry);
console.log(typeof dog.happiness);

/*
  You can access the values of each property using dot notation.
  Log the name and breed of this dog using dot notation.
*/

let dogName = "Spot"; // complete the code
let dogBreed = "Dalmatian"; // complete the code

console.log(`${dogName} is a ${dogBreed}`);
console.log(`${dog.name} is a ${dog.breed}`);

/* EXPECTED RESULT

  Spot is a Dalmatian

*/