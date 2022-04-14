let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = new Map();

for (let col of rockStar.entries()) {
    if (col[0][0] > "a") {
        newRock.set(col[0], col[1]);
    }
}

console.log(newRock);
module.exports = { rockStar, newRock };