const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 letters:',
            name: 'letters',
        },
        {
            type: 'input',
            message: 'Enter the text color (Color or hexa):',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Select a shape:',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: "Enter the shape's color: ",
            name: 'shapesColor',
        },
    ])