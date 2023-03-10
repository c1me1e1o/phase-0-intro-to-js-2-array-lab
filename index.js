const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats
}

function appendCat(name){
    const Cats = [...cats, name];
    return Cats;
}

function prependCat(name) {
    const Cats = [name, ...cats];
    return Cats
}

function removeLastCat(name) {
    const Cats = cats.slice(0, cats.length-1);
    return Cats
}

function removeFirstCat(name) {
    const Cats = cats.slice(1)
    return Cats
}
