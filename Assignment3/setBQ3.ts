function processValue(value: unknown): void {

    if (typeof value === "string") {
        console.log("Length:", value.length);
    }

    else if (typeof value === "number") {
        console.log("Square:", value * value);
    }

    else {
        console.log("Unknown Type");
    }
}

processValue("Chitra");
processValue(5);