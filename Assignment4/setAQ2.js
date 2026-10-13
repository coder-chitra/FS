function delayedMessage(callback) {

    setTimeout(() => {
        callback("Delayed message");
    }, 2000);

}

delayedMessage((message) => {
    console.log(message);
});