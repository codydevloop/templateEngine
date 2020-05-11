// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
const inquirer = require("inquirer");

class Intern extends Employee{
    constructor(name, id, email,school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }

    addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter a name for the Intern"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter an Intern ID"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the school the Intern is attending"
            }

        ]).then(function(data){
            console.log("Intern Added!");
            const newIntern = new Intern(data.name, data.id, data.email);
            
        });
    }


}

module.exports = Intern;