const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const path = require('path');
const folderPath = './examples';
const fileName = 'logo.svg'
const filePath = path.join(folderPath, fileName);


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
        const svgCircle = renderCircle(newCircle);
        fs.writeFile(filePath, svgCircle, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg');
        })
    
        
    } else if (data.shape === 'triangle') {
        
        const newTriangle = new Triangle(data.text, data.textColor, data.shapesColor, data.shape);
        const svgTriangle = renderTriangle(newTriangle);
        fs.writeFile(filePath, svgTriangle, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg');
        })
        
    } else  {
        
        const newSquare = new Square(data.text, data.textColor, data.shapesColor, data.shape);
        const svgSquare = renderSquare(newSquare);
        fs.writeFile(filePath, svgSquare, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg'); 
        })

    }
}

const renderCircle = ({text, textColor, shapesColor, shape}) => 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${shapesColor}" />

<text x="152" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
;

const renderTriangle = ({text, textColor, shapesColor, shape}) =>
`<svg version="1.1" 
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="150,40 40,180 260,180" font-size="30" text-anchor = "middle" fill="${shapesColor}" />
<text x="150" y="145" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
;

const renderSquare = ({text, textColor, shapesColor, shape}) =>
`<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">

<rect x="50" y="50" width="200" height="100" fill="${shapesColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`
;