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

};

module.exports = Engineer;