let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set([...one, ...two]);
let intersectionSet = new Set([...one].filter((i) => two.has(i)));
let differenceSet = new Set([...one].filter((i) => !two.has(i)));

console.log(one);
console.log(two);
console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

module.exports = { unionSet, intersectionSet, differenceSet };
