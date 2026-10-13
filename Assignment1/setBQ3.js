const originalArray = [10, 20, 30];

const copiedArray = [...originalArray];

copiedArray.push(40);

console.log("Original:", originalArray);
console.log("Copied:", copiedArray);