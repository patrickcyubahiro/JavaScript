let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]
