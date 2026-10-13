function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000);
    });
}

getMessage().then(result => {
    console.log(result);
});