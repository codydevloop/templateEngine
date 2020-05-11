// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class

const Employee = require("./Employee");
const inquirer = require("inquirer");
// const app = require("../app")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;       
    };

    getGitHub(){
        return this.github;
    };

    getRole(){
        return "Engineer";
    };

    addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter a name for the Engineer"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter an Emplyee ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter an email for the Engineer"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the github user name for the Engineer"
            }

        ]).then(function(data){
            console.log("Engineer Added!");
            const newEngineer = new Engineer(data.name, data.id, data.email);
            
        });
    }


};

module.exports = Engineer;