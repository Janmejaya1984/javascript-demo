class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    static code(){
        console.log("Employee is coding");
    }
}
Employee.code();
const emp1 = new Employee(1,'John',25);
emp1.swipeIn();
//Employee.swipeIn();
