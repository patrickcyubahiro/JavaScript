 
class Human {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Human {
  constructor(name, age) {
super(name);
    this.age = age;
  }
}
