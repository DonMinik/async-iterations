console.log('Fruitbasket');

/**
 * a function that turns an array to an iterator implementing next and hasNext function
 * @param arr
 * @returns {{next: (function(): null), hasNext: (function(): boolean)}}
 */
function arrayToIterator(arr) {
    let index = 0;
    return {
        next: function () {
            return nextIndex < arr.length ?
                {value: arr[index++], done: false}
                :{done: true};
        },
        hasNext : function() { // iterators do not seem to have this function by default. I consider this being quite useful.
            return nextIndex < arr.length ? true : false;
        }
    };
}

let it = arrayToIterator(['grape', 'apple', 'banana']);

while (it.hasNext()) console.log(it.next().value);

