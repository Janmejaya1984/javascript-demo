var regex = /H[abcd]{1,4}ello/;
console.log("Habcdello".match(regex));
console.log("Haaaaello".match(regex));
console.log("Hbello".match(regex));
/*
Haello
Hbello
Hcello
Hdello
//all the four string above will match
Heello         //Will not match
*/

