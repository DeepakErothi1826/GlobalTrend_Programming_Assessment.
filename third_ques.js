function flattenArray(nestedArray) {
    let flattenedArray = [];

    function flat(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flat(item);
            } else {
                flattenedArray.push(item);
            }
        });
    }
    flat(nestedArray);
    return flattenedArray;
}
let nestedArray = [22, [23, [24, 25], 26], [27, 28]];
let flat = flattenArray(nestedArray);

console.log(flat);