class EmployeeInfo{
    showDetails(){
        console.log("Details Of the Employee");
        console.log("-----------------------");
        console.log("ID :"+this.id);
        console.log("Name :"+this.name);
        console.log("Department :"+this.dept);
        console.log("Designation :"+this.desg);
        console.log("Salary :"+this.sal);
    }
    swipeIn(){
        console.log("The Employee having id: "+this.id+ " just signed in at :"+new Date());
    }
    constructor(id1,name1,dept1,desg1,sal1){
        this.id=id1;
        this.name=name1;
        this.dept = dept1;
        this.desg = desg1;
        this.sal = sal1;
        console.log("Constructor is called to initialize Employee object having id"+this.id);
    }
   
}

const employee1 = new EmployeeInfo(101,'John','HR','Manager',200000);
const employee2 = new EmployeeInfo(102,'Foo','IT','Developer',300000);
const employee3 = new EmployeeInfo(103,'Bar','HR','ASSTManager',100000);

employee1.swipeIn();
employee2.swipeIn();
employee3.swipeIn();

employee1.showDetails();
employee2.showDetails();
employee3.showDetails();


