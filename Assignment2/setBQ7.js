function processNumber(number, callback) {
    return callback(number);
}

function square(num) {
    return num * num;
}

console.log(processNumber(5, square));