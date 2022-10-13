class Employee{
    constructor(id1,name1,dept1,desg1,managerId1){
        this.id=id1;
        this.name=name1;
        this.dept=dept1;
        this.desg = desg1;
        this.managerId = managerId1;
    }
    sendMail(receiverMailId,content){
        console.log("Sent Mail Successfully to :"+receiverMailId +" With content "+content);
    }
    applyLeave(startDate,endDate){
        console.log("Applied leave is successfull for date ranging from "+startDate+" to :"+endDate +" by the employee :"+this.name);
    }
    showDetails(){
        console.log("Details of : "+(this.managerId>0?'Employee':'Manager'));
        console.log("-----------------------");
        console.log("ID :"+this.id);
        console.log("Name :"+this.name);
        console.log("Department :"+this.dept);
        console.log("Designation :"+this.desg);
        console.log(this.managerId>0?'Working under manager id:'+this.managerId:'You are a manager');
    }
}

class Manager extends Employee{
    approveLeaves(){
        console.log("The leves are approved");
    }
    assignAProject(projectName,employee){
        console.log("Employee with id: "+employee.id + " is assigned to a project :"+projectName);
    }
}

employee1 = new Employee(1,'John',"IT","Developer",11);
manager11 = new Manager(11,'Seema','IT',"Manager",0);

employee1.showDetails();
employee1.applyLeave('13-10-2022','20-10-2022');
employee1.sendMail('xyz@gmail.com',"Please Find the Attachment");
manager11.showDetails();
manager11.applyLeave('13-10-2022','20-10-2022');
manager11.sendMail('xyz@gmail.com',"Please Find the Attachment By Manager");
manager11.approveLeaves();
manager11.assignAProject("Project-XXX",employee1);