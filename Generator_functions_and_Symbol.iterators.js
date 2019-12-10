const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);
