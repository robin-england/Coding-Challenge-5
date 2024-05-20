// U63166005
// Coding Challenge 5: Employee and Manager Salary Calculation Challenge
// 1. Employee Class:
class Employee{
    constructor(name,salary){
        this.name=name          //Creates initial values for name and salary
        this.salary=salary
        console.log("Name: "+this.name);                //Displays values for name and salary in console:
        console.log("Monthly Salary: $" + this.salary);
        }
    calcAnnualSalary(){
        return this.salary*12       // returns annual salary
    }
}
// 2. Manager Subclass:
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)         // Copies from Employee class
        this.department=department
    }
    calcAnnualSalary(){
        const baseSalary = super.calcAnnualSalary()  // Copies from Employee function to get base salary
        const bonus = 0.15*baseSalary                // Creates bonus amount
        console.log(this.name);                      // Logs name, bonus, and annual salary to console
        console.log("Bonus is $" + bonus);
        console.log("Total annual compensation is $" + (baseSalary+bonus));
        return (baseSalary+bonus)                    // Returns value for annual salary
    }
}
// 3. Instantiate Manager Objects:
let bobRoss = new Manager("Bob Ross",6600,"Digital Marketing")  // Creating managers
let debbieLittle = new Manager("Debbie Little",7205,"Finance")

bobRoss.calcAnnualSalary()             // Running function for both managers
debbieLittle.calcAnnualSalary()