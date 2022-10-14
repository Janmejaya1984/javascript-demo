var regex=/c[a]{1,4}r/; //min 1 or max 4
console.log("car".match(regex));
console.log("caar".match(regex));
console.log("caaar".match(regex));
console.log("cr".match(regex));
console.log("cra".match(regex));
console.log("ca".match(regex));
console.log("caaaar".match(regex));
console.log("caaaaar".match(regex));