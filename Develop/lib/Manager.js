// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const app = require("../app")


class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);   
        this.officeNumber = officeNumber;
    };

    getRole(){
        return "Manager";
    };

    getOfficeNumber(){
        return this.officeNumber;
    }

    // addManager(){
    //     inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "name",
    //             message: "Please enter a name for the Manger"
    //         },
    //         {
    //             type: "input",
    //             name: "id",
    //             message: "Please enter a Manger ID"
    //         },
    //         {
    //             type: "input",
    //             name: "email",
    //             message: "Please enter an office phone number for the Manger"
    //         }
           
    //     ]).then(function(data){
    //         console.log("Manager Added!");
    //         const newManager = new Manager(data.name, data.id, data.email);

            
            
            
    //     });
    // }
}

module.exports = Manager;