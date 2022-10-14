var regex  = /[^abc]/;

console.log("a".match(regex));
console.log("b".match(regex));
console.log("c".match(regex));
console.log("aa".match(regex));
console.log("ab".match(regex));
console.log("abc".match(regex));
console.log("d".match(regex));
console.log("e".match(regex));
console.log("XXXX".match(regex));
