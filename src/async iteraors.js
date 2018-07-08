
function createAsyncFruitbasket(...fruits) {
    let index = 0;
    let asyncIt = {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            return index < fruits.length ?
                Promise.resolve({value: fruits[index++], done: false})
                :Promise.resolve({done: true});
        }
    };
    return asyncIt;
}


async function handleFruits() {
    for await (let fruit of createAsyncFruitbasket('grape', 'apple', 'banana')) {
        console.log(fruit);
    }
    return true; //indicates all fruits have been printed
}

console.log('Fruitbasket');
handleFruits();
