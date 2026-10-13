const id = Symbol("id");

const user = {
    name: "Chitra",
    [id]: 101
};

console.log(user.name);
console.log(user[id]);