let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

let arrKey = [];
let arrValue = [];

for (let col of shoppingList.entries()) {
    arrKey.push(col[0]);
}

for (let i = 0; i < arrKey.length; i++) {
    console.log("groceries: " + arrKey[i]);
}

for (let col of shoppingList.entries()) {
    arrValue.push(col[1]);
}

for (let i = 0; i < arrValue.length; i++) {
    console.log("amount: " + arrValue[i]);
}

for (let col of shoppingList.entries()) {
    console.log(col);
}

module.exports = { shoppingList, arrKey, arrValue };