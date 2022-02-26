const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Employee");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Employee");

Generator.prototype.generateManagerProfile = function () {
  inquirer.prompt({
    type: "text",
    name: "name",
    message: "What is your name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
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
    type: "text",
    name: "officeNumber",
    message: "What is your Office Number?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your Office Number!");
        return false;
      }
    },
    type: "list",
    name: "action",
    message: "Whould you like to add a engineer, add an intern or finish building my team?",
    choices:["add an Engineer", "add an Intern", 'finish building my team']
  })
  .then(({}))
};
