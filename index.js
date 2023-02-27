const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./src/template.js');

const team = [];
const idArray = [];

// reset dist/ folder with 'npm run reset'

function addTeam() {
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is this manager's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter this manager's name.";
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's ID number?",
                validate: (answer) => {
                    const valid = answer.match(/^[1-9]\d*$/);
                    if (valid) {
                        return true;
                    }
                    return "Please enter this manager's ID number.";
                },
            },
            {
                type: 'input',
                name: 'managerEmail', 
                message: "What is this team member's email address?",
                validate: (answer) => {
                    const valid = answer.match(/\S+@\S+\.\S+/);
                    if (valid) {
                      return true;
                    }
                    return "Please enter this team member's email address.";
                },
            },
            {
                type: 'input', 
                name: 'managerOffice',
                message: "What is this manager's office number?",
                validate: (answer) => {
                    const valid = answer.match(/^[1-9]\d*$/);
                    if (valid) {
                        return true;
                    }
                    return "Please enter this manager's office number.";
                },
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
            );
            team.push(manager);
            idArray.push(answers.managerId);
            addEmployee();
        });
    }

    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoice',
                message: "Which team member role would you like to add?",
                choices: [
                    'Engineer',
                    'Intern',
                    'No more team members',
                ],
            },
        ])
        .then((userChoice) => {
            switch (userChoice.teamChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern': 
                    addIntern();
                    break;
                default: 
                    addTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'engineerName',
                message: "What is this new engineer's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter this engineer's name.";
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is this engineer's ID number?",
                validate: (answer) => {
                    const valid = answer.match(/^[1-9]\d*$/);
                    if (valid) {
                        if (idArray.includes(answer)) {
                            return 'This ID is already in use. Please enter another ID.';
                        } else {
                            return true;
                        }
                    }
                    return "Please enter this engineer's ID number."
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is this team member's email address?",
                validate: (answer) => {
                  const valid = answer.match(/\S+@\S+\.\S+/);
                  if (valid) {
                    return true;
                  }
                  return "Please enter this team member's email address.";
                },
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is this engineer's GitHub username?",
                validate: (answer) => {
                  if (answer !== '') {
                    return true;
                  }
                  return "Please enter this engineer's GitHub username.";
                },
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGitHub
            );
            team.push(engineer);
            idArray.push(answers.engineerId);
            addEmployee();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is this intern's name?",
                validate: (answer) => {
                    if (answer !== '') {
                    return true;
                    }
                    return "Please enter this intern's name.";
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is this intern's id?",
                validate: (answer) => {
                  const valid = answer.match(/^[1-9]\d*$/);
                  if (valid) {
                    if (idArray.includes(answer)) {
                      return 'This ID is already in use. Please enter another ID.';
                    } else {
                      return true;
                    }
                  }
                  return "Please enter this intern's ID number.";
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is this intern's email?",
                validate: (answer) => {
                  const valid = answer.match(/\S+@\S+\.\S+/);
                  if (valid) {
                    return true;
                  }
                  return "Please enter this intern's email address.";
                },
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is this intern's current school?",
                validate: (answer) => {
                  if (answer !== '') {
                    return true;
                  }
                  return "Please enter this intern's school";
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            team.push(intern);
            idArray.push(answers.internId);
            addEmployee();
        });
    }

    function addTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(team), 'utf-8');
    }

    addManager();
}

addTeam();