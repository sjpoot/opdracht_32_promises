//Exercise 1
const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number < 10 || number > 10) {
            resolve(number);
        } else {
            reject("Number is nog less or greater than 10")
        }
    });
}

testNum(9).then(function (resolved) {
    console.log(resolved);
})
    .catch(function (error) {
        console.log(error);
    })

//Exercise 2

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(i => (typeof i === "string"))) {
            const wordsUpper = []
            array.forEach((iter) => {
                wordsUpper.push(iter.toUpperCase());
                resolve(wordsUpper);
            });
        } else {
            reject(`${array} contains a value which is not a string!`);
        }
    });
}

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        const sortedWords = array.sort();
        resolve(sortedWords);
    });
}

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(function (resolved) {
        return(resolved);
    })
    .then(function (resolved) {
        sortWords(resolved);
        return(resolved);
    })
    .then(function (resolved) {
        console.log(resolved);
    })
    .catch(function (error) {
        console.log(error);
    });