// create array with 5 elements

const mtgCards = [
  "brave-kin-duo",
  "kitsa-otterball-elite",
  "ridescent-vinelasher",
  "emberheart-challenger",
  "pawpatch-recruit"
];

// Replace the value of the element at position 1 and 4
// const tempVal = mtgCards[4];
// mtgCards[4] = mtgCards[1];
// mtgCards[1] = tempVal;
// or
[mtgCards[1], mtgCards[4]] = [mtgCards[4], mtgCards[1]];

// Add a new element to the beginning of the array
mtgCards.unshift("finneas-ace-archer")

// Remove the element at the end of the array
mtgCards.pop();

// Print the array to the console.
console.log(mtgCards)
