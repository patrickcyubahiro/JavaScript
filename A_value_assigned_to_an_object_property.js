let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});

console.log(newPerson.name); // Bob
