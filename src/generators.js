/**
 * generator function that creates an iterator to given array
 * @param arr
 * @returns {IterableIterator<*>}
 */
function* iteratorFactory(arr) {
    var index = 0;
    while (index < 3)  yield arr[index++];
}

let it = iteratorFactory(['grape', 'apple', 'banana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
