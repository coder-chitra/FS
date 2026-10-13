function applyFunction(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4];

const result = applyFunction(numbers, num => num * 2);

console.log(result);