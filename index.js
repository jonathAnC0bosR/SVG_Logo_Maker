const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const path = require('path');
const folderPath = './examples';


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
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: "Enter the shape's color: ",
            name: 'shapesColor',
        },
    ])
    .then((data) => {
        render(data);
    })


const render = function(data) {
    if(data.shape === 'circle') {
        
        const newCircle = new Circle(data.text, data.textColor, data.shapesColor, data.shape);
        console.log('This is a Circle! ' , newCircle);
        const fileName = 'newCircleEx.svg';
        const filePath = path.join(folderPath, fileName);
        const svgCircle = generateSvgCircle(newCircle);
        fs.writeFile(filePath, svgCircle, (err) => {
            err ? console.log(err) : console.log('File Created');
        })

        
    } else if (data.shape === 'triangle') {
        const newTriangle = new Triangle(data.text, data.textColor, data.shapesColor, data.shape);
        console.log('This is a Triangle! ' , newTriangle);
    } else  {
        const newSquare = new Square(data.text, data.textColor, data.shapesColor, data.shape);
        console.log('This is a square!');
    }
}

const generateSvgCircle = ({text, textColor, shapesColor, shape}) => 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${shapesColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
;
