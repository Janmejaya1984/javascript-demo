class EmployeeInfo{
    static showAllEmployeeDetails(){
        console.log("Details Of All the Employee");
        console.log("ID\tName\tDept\tDesg\tSal");
        for(let i=0;i<this.employees.length;i++){
            console.log(this.employees[i].id+"\t"+this.employees[i].name+"\t"+this.employees[i].dept+"\t"+this.employees[i].desg+"\t"+this.employees[i].sal+"\t");
        }
    }
    
    static employees = [];

    static addEmployee(employee){
        this.employees.push(employee);
    }
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
const employee4 = new EmployeeInfo(104,'Ajay','HR','Manager',200000);
const employee5 = new EmployeeInfo(105,'Bijay','IT','Developer',300000);
const employee6 = new EmployeeInfo(106,'Sameer','IT','ASSTManager',100000);

EmployeeInfo.addEmployee(employee1);
EmployeeInfo.addEmployee(employee2);
EmployeeInfo.addEmployee(employee3);
EmployeeInfo.addEmployee(employee4);
EmployeeInfo.addEmployee(employee5);
EmployeeInfo.addEmployee(employee6);
EmployeeInfo.showAllEmployeeDetails();
/*employee1.swipeIn();
employee2.swipeIn();
employee3.swipeIn();

employee1.showDetails();
employee2.showDetails();
employee3.showDetails();*/


