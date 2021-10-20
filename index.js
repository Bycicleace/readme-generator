var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        // Title
        type: "input",
        name: "title",
        message: "Please enter a project title: ",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("Please enter a project name!");
                return false;
            }
        }
    },
    {
        // Description
        type: "input",
        name: "description",
        message: "Please provide a description: ",
    },
    {
        type: "confirm",
        name: "confirmInstall",
        message: "Do you want to add installation instructions? ",
        default: true
    },
    {
        // Installation Instructions
        type: "input",
        name: "install",
        message: "Enter instructions: ",
        when: ({ confirmInstall }) => confirmInstall
    },
    {
        type: "confirm",
        name: "confirmUsage",
        message: "Do you want to add usage instructions? ",
        default: true
    },
    {
        // Usage Instructions
        type: "input",
        name: "usage",
        message: "Please enter usage instructions: ",
        when: ({ confirmUsage }) => confirmUsage
    },
    {
        type: "confirm",
        name: "confirmContribution",
        message: "Do you want to add Contribution guidelines? ",
        default: false
    },
    {
        // Contribution Instructions
        type: "input",
        name: "contribution",
        message: "Please enter contribution instructions: ",
        when: ({ confirmContribution }) => confirmContribution
    },
    {
        type: "confirm",
        name: "confirmTests",
        message: "Do you want to add tests?",
        default: false
    },
    {
        // Tests
        type: "input",
        name: "tests",
        message: "Please include tests to run, and their instructions: ",
        when: ({ confirmTests }) => confirmTests
    },
    {
        // Ask if license wanted
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to add a license? ",
        default: true
    },
    {
        // License selection
        type: "list",
        name: "license",
        message: "Please select license to use: ",
        choices: [
            '[None]',
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License'
        ],
        when: ({ confirmLicense }) => confirmLicense
    },
    {
        type: "confirm",
        name: "confirmContact",
        message: "Do you want to add contact info? ",
        default: true
    },
    {
        // GitHub Username
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username? ",
        when: ({ confirmContact }) => confirmContact
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? ",
        when: ({ confirmContact }) => confirmContact
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            return generateMarkdown(data);
        })
        .then(markdown => {
            console.log(markdown);
        })
}

// Function call to initialize app
init();