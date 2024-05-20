// U63166005
// Coding Challenge 5: Employee and Manager Salary Calculation Challenge
// 1. Employee Class:
class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
        console.log("Name: "+this.name);
        console.log("Monthly Salary: $" + this.salary);
        }
    calcAnnualSalary(){
        return this.salary*12
    }
}