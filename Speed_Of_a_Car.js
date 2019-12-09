let car = {
  speed: 40,
  accelerate() {
 this.speed += 10;
  }
};
 
car.accelerate();
car.accelerate();
console.log(car.speed);
