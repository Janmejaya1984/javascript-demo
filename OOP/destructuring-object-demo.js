
var empOne = {
    name:'Janmejaya',
    id:101,
    emailId:'bapun00@gmail.com'
};



let { emailId,...r }  = empOne;
console.log(emailId);
console.log(r);

let{id}=r;
console.log(id);

 // 'John'
//console.log(rest) 
/*{
    empNumber : 1001,
    emailId : "John@gmail.com"
}*/
