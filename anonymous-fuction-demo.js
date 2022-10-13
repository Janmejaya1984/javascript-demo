function greet(choice){
	choice();
}
greet(function(){ console.log("Hello World")});
// Hello World

greet(function(){console.log("Good Evening")});
