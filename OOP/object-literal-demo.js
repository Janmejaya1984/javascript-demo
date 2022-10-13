var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com",
    swipeIn(){console.log("Swipe In by "+this.name)}
};
var empTwo = {
    name : "Foo",
    empNumber : 1002,
    emailId : "foo@gmail.com",
    swipeIn(){console.log("Swipe In by "+this.name)}
};

console.log("Name Of Employee 1 is:"+empOne.name);
console.log("ID Of Employee 1 is:"+empOne.empNumber);
console.log("EmailID Of Employee 1 is:"+empOne.emailId);
empOne.name = "Janmejaya";
console.log("Name Of Employee 1 using array syntax is:"+empOne["name"]);
console.log("ID Of Employee 1 using array syntax is:"+empOne["empNumber"]);
console.log("EmailID Of Employee 1 using array syntax is:"+empOne["emailId"]);
empOne.swipeIn();
empTwo.swipeIn();

var d1 = new Date();
var d2 = new Date(1234567898765);
var d3 = new Date("03/21/2022");
var d4 = new Date("10-02-2022");

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);