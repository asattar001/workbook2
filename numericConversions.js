// This script tests various numeric conversion techniques
// Author: Abdul Sattar

var a = "101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

console.log(`Original values: a: ${a}b: ${b} c: ${c} d: ${d}`);
console.log(`Using parseInt:  a: ${parseInt(a)}   b: ${parseInt(b)} c: ${parseInt(c)} d: ${parseInt(d)}`);
console.log(`Using parsFloat: a: ${parseFloat(a)} b: ${parseFloat(b)} c: ${parseFloat(c)} d: ${parseFloat(d)}`);
console.log(`Using Number:    a: ${Number(a)} b: ${Number(b)} c: ${Number(c)} d: ${Number(d)}`);
console.log(`Using unary+:    a: ${+a} b: ${+b} c: ${+c} d: ${+d}`);
