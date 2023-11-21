import * as util from "./util" ;
console.log ('apiKey: %s', util.apiKey);
console.log ('theNUmber: %d', util.theNUmber);
console.log ('default: %s', util.default);

function combine (a, b, c) {
    return (a * b / c);
}

console.log (combine(6,2,3));