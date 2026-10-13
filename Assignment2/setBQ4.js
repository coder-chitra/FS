function addElement(array, element) {
    return [...array, element];
}

const originalArray = [10, 20, 30];

const newArray = addElement(originalArray, 40);

console.log("Original Array:", originalArray);
console.log("New Array:", newArray);