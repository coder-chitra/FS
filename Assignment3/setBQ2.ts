class Storage<T> {
    private value!: T;

    setData(data: T): void {
        this.value = data;
    }

    getData(): T {
        return this.value;
    }
}

const numberStorage = new Storage<number>();
numberStorage.setData(100);

const stringStorage = new Storage<string>();
stringStorage.setData("TypeScript");

console.log(numberStorage.getData());
console.log(stringStorage.getData());