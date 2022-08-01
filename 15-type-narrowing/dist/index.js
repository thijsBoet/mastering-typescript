"use strict";
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    else {
        return value.repeat(3);
    }
}
console.log(triple('Hi'));
