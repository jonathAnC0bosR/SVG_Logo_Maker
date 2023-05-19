const inquirer = require('inquirer');
const fs = require('fs');
const {Circle} = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 letters:',
            name: 'text',
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
    .then((data) => {
        // const userInput = {
        //     text: data.text,
        //     textColor: data.textColor,
        //     shapesColor: data.shapesColor,
        //     shape: data.shape,
        // }


        // console.log(userInput);
        const newShape = new Circle(data.text, data.textColor, data.shapesColor, data.shape);
        console.log(newShape);
    })

