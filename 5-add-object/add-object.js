//Cat Array
let cats = [
  {
    name: "Tuna",
    breed: "Siamese",
    gender: "Female",
    neutered: true,
  },
  {
    name: "Chester",
    breed: "Tabby",
    gender: "Male",
    neutered: false,
  },
  {
    name: "Blue",
    breed: "Naked",
    gender: "Female",
    neutered: false,
  },
];

//TODO: Make a function to add a new cat into the array
// Name the function addNewCat

//1. Make a cat object
//2. Put cat object into a function
// 3. change the hard coded cat variables and call the function
//4. push to cats array

const addNewCat = (catName, catBreed, catGender, catNeutered) => {
  let newCat = {
    name: catName,
    breed: catBreed,
    gender: catGender,
    neutered: catNeutered,
  };

  cats.push(newCat);
  return cats;
};

addNewCat("Daisy", "Tabby", "Female", true);
addNewCat("Spike", "Tabby", "Male", false);
addNewCat("Lilly", "Nake", "Female", false);
