function getFirstElement<T>(array: T[]): T {
    return array[0];
}

console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["A", "B", "C"]));