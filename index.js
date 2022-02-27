const inquirer = require("inquirer");
const fs = require("fs");
const {generatePage, writePage} =  require ("./page-template.js");
const allEmployees= [];

const questions = [
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    // function to allow only one manager to be created
    choices: () => {
       if (allEmployees.some(employee => employee.role === 'Manager')) {
           return ['Engineer', 'Intern']
       } else {
      return ["Manager", "Engineer", "Intern"];
      }
    },
  },
  {
    type: "text",
    name: "name",
    message: "What is your full name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "id",
    message: "What is your id number?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your id number!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "officeNumber",
    message: "What is your Office Number?",
    when: ({ role }) => {
      if (role === "Manager") {
        return true;
      } else {
        return false;
      }
    },
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your Office Number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: ({ name }) => `What is ${name}'s github username?`,
    when: ({ role }) => {
      if (role === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter a username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: ({ name }) => `What school did ${name} attend?`,
    when: ({ role }) => {
      if (role === "Intern") {
        return true;
      } else {
        return false;
      }
    },
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter a school!");
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add an employee?",
    default: true,
  },
];

const promptUser = () => {
  return inquirer.prompt(questions)
  .then(userResponse => {

      // adds to employee data array
      allEmployees.push(userResponse);

      // adds another employee based on user selection
      if (userResponse.addEmployee) {
          return promptUser();
      } else {
          return allEmployees;
      };
  });
};



promptUser()
.then(data => generatePage(data))
.then((generatedHtml) => writePage(generatedHtml))
.catch(err => console.log(err));
