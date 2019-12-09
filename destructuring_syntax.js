let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4
