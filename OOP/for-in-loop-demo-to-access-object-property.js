var employeeOne = {
    name:"Janmejaya",
    id:101,
    emailId:'bapun00@gmail.com',
    address:'Hyderabad'
};

for(propertyName in employeeOne){
    console.log(propertyName+"\t"+employeeOne[propertyName]);
}

console.log(Object.values(employeeOne));
