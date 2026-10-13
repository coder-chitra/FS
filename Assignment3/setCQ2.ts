try {

    let result = 10 / 0;

    if (!isFinite(result)) {
        throw new Error("Division by Zero");
    }

    console.log(result);

}
catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
    }
}
finally {
    console.log("Execution Completed");
}