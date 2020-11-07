//  Cat Array
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

//TODO:  Make a function that prints all the cat names
//1.  List all the cat names with a for each loop
// 2. Make sure we print it
// 3. Name the function getCatNames
//Don't forget to call it so you can see it in the terminal

const getCatNames = () => {
  cats.forEach((cat) => {
    console.log(cat.name);
  });
};

getCatNames();

function getCatNamesTwo() {
  cats.forEach((cat) => {
    console.log(cat.name);
  });
}

getCatNamesTwo();
