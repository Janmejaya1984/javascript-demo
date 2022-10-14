var json = '{ "firstName":"John", "lastName":"Doe"}';
var name= JSON.parse(json);            //will convert JSON string into an JavaScript object
console.log(name.firstName +" "+ name.lastName );
