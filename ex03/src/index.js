var generatorArray = [];

function* myGenerator(){
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena'
    yield* arguments;

}

var iterator = myGenerator(6, 7, 8);
/*for (let i = 0; i < 13; i++){
    if (i != 9) {
        var val = iterator.next().value;
        generatorArray.push(val);
    } else {
        var v = iterator.next().value;
        generatorArray.push(v);
    }
}*/

for (let i = 0; i < 13; i++) {
    generatorArray.push(iterator.next().value);
  }

console.log(generatorArray);
module.exports = { generatorArray, myGenerator };