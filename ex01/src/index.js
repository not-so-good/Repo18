let myArr = [];

function* multiplication(x) {
    for (let i = 0; i < x; i++) {
        myArr.push(x * 2);
        yield x *= 2;
    }
}

var num = multiplication(3);
for (let i = 0; i < 3; i++) {
    console.log(num.next().value);
}

module.exports = multiplication;