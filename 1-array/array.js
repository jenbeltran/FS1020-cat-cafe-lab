let cats = ["Tuna", "Chester", "Blue"];

//TODO: print the full array
console.log("full array");
console.log(cats);

//TODO: find one cat
console.log("One cat in the array");
console.log(cats[1]);

// TODO: for loop - all cats
console.log("For Loop");
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

//TODO: for each loop
//MDN resource for each example
//array.forEach(element => console.log(element));
console.log("For Each loop");
cats.forEach((cat) => {
  console.log(cat);
});

cats.forEach(function printCat(cat) {
  console.log(cat);
});
