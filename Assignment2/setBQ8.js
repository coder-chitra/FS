function* fibonacci() {
    let a = 0;
    let b = 1;

    yield a;
    yield b;
    yield a + b;
}

const fib = fibonacci();

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);