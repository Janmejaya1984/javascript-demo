var regex=/c[a]{1,}r/; //min 1 and max any thing
console.log("car".match(regex));
console.log("caar".match(regex));
console.log("caaar".match(regex));
console.log("cr".match(regex));
console.log("cra".match(regex));
console.log("ca".match(regex));
console.log("caaaar".match(regex));
console.log("caaaaar".match(regex));