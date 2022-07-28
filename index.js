// importing inquirer 
const inquirer = require('inquirer');

// importing file system 
const fs = require('fs');

const manager = require('./lib/manager')
const employee = require('./lib/employee')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

/* An array of objects for manager questions. */
const managerQues = [
    {
        type: 'input',
        message: 'What is your manger name?',
        name: 'mangerName',
    },
    {
        type: 'input',
        message: 'What is your manager ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Current office number?',
        name: 'managerOfNum',
    }
]

/* An array of objects for engineer questions. */
const engineerQues = [
    {
        type: 'input',
        message: "Current engineer name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "Current engineer ID?",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "Current engineer email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "Enginner's Github:",
        name: 'enginnerGithub'
    }
]

/* An array of objects for intern questions. */
const internQues = [
    {
        type: 'input',
        message: "Current interns name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "Current interns ID?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "Current interns email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "Current interns school?",
        name: 'internSchool'
    }
]

const employeeList = [
    {
        type: 'list',
        message: 'add a team member here:',
        name: 'employeeList',
        choices: ['Engineer', 'Intern', 'Cancel'],
    }
]

async function init() {
    let response = await inquirer.prompt(managerQues);   
}

init()