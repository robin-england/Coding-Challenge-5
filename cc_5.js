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
// 2. Manager Subclass:
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this.department=department
    }
    calcAnnualSalary(){
        const baseSalary = super.calcAnnualSalary()
        const bonus = 0.15*baseSalary
        console.log("Bonus is $" + bonus);
        console.log("Total annual compensation is $" + (baseSalary+bonus));
        return (baseSalary+bonus)
    }
}