const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// 
const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Page created successfully!');
    });
  };
  
  console.log(`
  Welcome to the Team Profile Generator!  Let's add some employees!
  `);

const addEmployee = employeeInfo => {

    // initiates html string for employee cards
    let allCards = '';

    employeeInfo.forEach(employee => {    
        
        const { name, id,email, role } = employee;
        let newEmployee = '';
        let extraInfo = '';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(name, id,email, employee.officeNumber);
                extraInfo = newEmployee.getOfficeNumber();
                break;
            case 'Engineer': 
                newEmployee = new Engineer(name, id,email, employee.github);
                extraInfo = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(name, id,email, employee.school);
                extraInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(name, id,email);
        };

        // concatenates all employee cards
        allCards += `
<div class="column ">
    <div class="cards">
        <div class="card" style:"width: 18rem">
            <div class="card-body">
                <div class="card-title text p-3 mb-2 bg-primary text-white">
                    <h3>${newEmployee.getName()}</h3>
                    <p >${newEmployee.getRole()}</p>
                </div>
            </div>
            <div class="card-text">
                <p>${newEmployee.getId()}<br />
                ${extraInfo}<br />
                ${newEmployee.getEmail()} </p>
            </div>
        </div>
    </div>
</div>`  
    });
    return allCards;
};
const generatePage = data =>{
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <section class="hero">
            <div class="hero-body alert alert-danger text-align-center">
                <div class="container">
                    <h1 class="title">My Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns d-flex flex-wrap-wrap  justify-content-around">
                ${addEmployee(data)}
            </div>
        </main>
    </body>
    </html>
    `;
};
module.exports = {generatePage, writePage}