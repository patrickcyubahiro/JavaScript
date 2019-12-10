let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);
