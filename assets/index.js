// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',

    },
    {
        type: 'input',
        message: 'Do you have any installation instructions?',
        name: 'installation',

    }, 
    {
        type: 'input',
        message: 'Enter your project`s usage information.',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'Enter your project`s contribution guidelines.',
        name: 'contribution',

    },
    {
        type: 'input',
        message: 'Enter your test instructions.',
        name: 'test',

    },
    {
        type: 'input',
        message: 'Enter your GitHub name.',
        name: 'GitHubName',

    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email',

    },

    // {
    //     type: 'list',
    //     message: 'What license would you like to use for your project?',
    //     name: 'license',
    //     choises: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating new Readme file");
            writeToFile("./utils/newReadme.md", generateMarkdown({ ...inquirerAnswers }));
        })
}
// Function call to initialize appscd
init();
