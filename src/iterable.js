let  fruitbasket = {}

fruitbasket[Symbol.iterator] = function* () {
    yield 'grape';
    yield 'apple';
    yield 'banana';
};

for (let fruit of fruitbasket) {
    console.log(fruit);
}

//as arrays are built-in iterables
console.log('#################');
function* carFactory() {
    yield* ['roadster', 'van', 'coupe', 'pickup'];
}

let cars = carFactory();

for (let car of cars) {
    console.log(car);
}
console.log(cars.next()); // returns { value: undefined, done: true } because iteration is already done.


