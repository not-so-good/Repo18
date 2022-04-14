let fifteenArray = [];

function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    let x;
    for (let i = 1; i <= 5; i++) {
        yield (x = i);
    }
}

function* insideGenerator2() {
    let x;
    for (let i = 10; i <= 15; i++) {
        yield (x = i);
    }
}

function* insideGenerator3() {
    let x;
    for (let i = 6; i <= 9; i++) {
        yield (x = i);
    }
}

var iterator = myGenerator();
for (let i = 0; i < 16; i++) {
    if (i != 15) {
        var val = iterator.next().value + "#";
        fifteenArray.push(val);
    } else {
        var v = iterator.next().value + "!";
        fifteenArray.push(v);
    }
}

console.log(fifteenArray);

module.exports = { fifteenArray, myGenerator };
