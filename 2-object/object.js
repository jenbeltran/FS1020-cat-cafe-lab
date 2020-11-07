let cats = [
  {
    name: "Tuna",
    breed: "Siamese",
    gender: "Female",
  },
  {
    name: "Chester",
    breed: "Tabby",
    gender: "Male",
  },
  {
    name: "Blue",
    breed: "Naked",
    gender: "Female",
  },
];

//forEach Format Example
// array.forEach(element => console.log(element));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//TODO: 1. Print full array
console.log("full array");
console.log(cats);

//TODO: 2. find the object of one cat - Chester
console.log("find the object of one cat - Chester");
console.log(cats[1]);

//TODO: 3. Find Blue's gender
console.log("Find Blues gender");
console.log(cats[2].gender);

//TODO: 4. Make a for each loop for all the cats
console.log("for each loop for all cats");
//array.forEach(element => console.log(element));
cats.forEach((cat) => {
  console.log(cat);
});

//TODO: 5. Print a list of all the cat names only
console.log("list of cat names");
cats.forEach((cat) => {
  console.log(cat.name);
});
