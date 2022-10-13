class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
        console.log("-----Parent Class Constructor------");
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    static code(){
        console.log("Employee is coding");
    }
}
class PartTimeEmployee extends Employee{
    constructor(id,name,age,contractPeriod){
        super(id,name,age);
        console.log("-----Child Class Constructor------");
        this.contractPeriod=contractPeriod;
    }
}
e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee(101,"Jane",34,3);
PartTimeEmployee.code();
e2.swipeIn();
console.log(e2.contractPeriod);
