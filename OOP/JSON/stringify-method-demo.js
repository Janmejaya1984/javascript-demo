var jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };  
var tScores = JSON.stringify(jScores);     //will convert object to JSON string
console.log(typeof(jScores));                   // returns Object
console.log(typeof(tScores));                   // returns String

console.log(tScores.toUpperCase());
