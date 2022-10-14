//var regex = /^[A-Z a-z _0-9]{3,}$/;
var regex = /^\W{3,}$/; // It will match A-Z a-z _ (it will not match space)
//Change it to \w and test
console.log("Janmejaya Padhiary".match(regex));
console.log("Janmejaya_Padhiary".match(regex));
console.log("Janmejaya123 Padhiary".match(regex));

console.log("!%$".match(regex));

