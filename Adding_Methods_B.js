function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}

var p = new person("A", 22);

document.write(p.yearOfBirth());
