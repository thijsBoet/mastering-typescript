function add(a, b) {
    return a + b;
}
function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
export { add, sample };
