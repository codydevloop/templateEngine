const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const engineerArr = [];
const managerArr = [];
const inter = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer.prompt([
    {
        type: "list",
        message: "**** Welcome!! ****\nThis app will take your input and create a nice webpage that displays your team.\n  Please select one of the choices below to begin",
        name: "choice",
        choices: [
          "Add Manager",
          "Add Engineer",
          "Add Intern"
         ]
      },

]).then(function(data){
    //console.log(data);
    userChoice(data);
});

//switch user response

const userChoice = function(data){
    switch(data.choice){
        case "Add Engineer": 
        //console.log("Engineer");
        choiceEngineer(); 
        break;

        case "Add Manager": 
        choiceManager(); 
        break;

        case "Add Intern": 
        choiceIntern(); 
        break;
    }
}

//create different employee objects and push them to the approprite array

const choiceManager = function(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter a name for the Manger"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter a Manger ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email for the Manager"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an office phone number for the Manger"
        }
       
    ]).then(function(data){
        console.log("Manager Added!");
        const newManager = new Manager(data.name, data.id, data.email);
        managerArr.push(newManager);    
    })
}

const choiceEngineer = function(){
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
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);    
    })
}

const choiceIntern = function (){
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
            name: "email",
            message: "Please enter an email for the Intern"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the school the Intern is attending"
        }

    ]).then(function(data){
        console.log("Intern Added!");
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        
    });
}














// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```