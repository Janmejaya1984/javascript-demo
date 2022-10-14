var regex=/c[a]*r/; //0 or more
console.log("car".match(regex));
console.log("caar".match(regex));
console.log("caaar".match(regex));
console.log("cr".match(regex));
console.log("cra".match(regex));
console.log("ca".match(regex));
