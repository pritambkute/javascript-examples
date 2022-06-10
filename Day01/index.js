/* Write a function which takes nested array as parameter and return flattened array. */

var arr = [1, 2, 3, [4, 5, [6, 7], 8], 9, 10];

// Using iteration

/*
const flattenArr = (arr) => {
    var flattendArray = [];
    arr.map((ele) => {
        if (Array.isArray(ele)) {
            flattendArray.push(...flattenArr(ele));
        } else {
            flattendArray.push(ele)
        }
    })
    return flattendArray;
}
*/

// Using Reducer
/*
const flattenArr = (arr) => {
    const flatArr = arr.reduce((acc, ele) => {
        if (Array.isArray(ele)) {
            acc.push(...flattenArr(ele));
        } else {
            acc.push(ele)
        }
        return acc;
    }, []);
    return flatArr;
}
*/

// Using flat function: flat is a built in function with levels as argument. Here we
// can pass Infinity as value if you are unsure about the level of nesting in given array.

const flattenArr = (arr) => {
    return arr.flat(Infinity);
}

console.log(flattenArr(arr));
