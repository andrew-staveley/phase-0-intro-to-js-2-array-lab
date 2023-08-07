let cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const moreCats = [...cats];
    moreCats.push(name);
    return moreCats;
}

function prependCat(name) {
    const moreCats = [...cats];
    moreCats.unshift(name);
    return moreCats;
}

function removeLastCat() {
    const moreCats = [...cats];
    moreCats.pop();
    return moreCats;
}

function removeFirstCat() {
    const moreCats = [...cats];
    moreCats.shift();
    return moreCats;
}