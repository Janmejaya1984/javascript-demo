var regex=/c[a]{4}r/; //0 or one
console.log("car".match(regex));
console.log("caar".match(regex));
console.log("caaar".match(regex));
console.log("cr".match(regex));
console.log("cra".match(regex));
console.log("ca".match(regex));
console.log("caaaar".match(regex));