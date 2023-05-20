const {Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('The color should be valid or in existance', () => {
            const color = 'red';
            const circle = new Circle('jfg', 'red', 'red', 'cirle');
            expect(circle.textColor).toEqual(color);
        })
    })
})

describe('Shapes', () => {
    describe('Triangle', () => {
        it('The text should be 3 charachters long', () => {
            const textCharacters = 3;
            const triangle = new Triangle('jbl', 'white', 'black', 'triangle');
            expect(triangle.text.length).toEqual(textCharacters);
        })
    })
})

describe('Shapes', () => {
    describe('Square', () => {
        it('The color of the shape should be in existance or valid', () => {
            const shapesColortest = 'blue';
            const square = new Square('TCL', 'red', 'blue', 'square');
            expect(square.shapesColor).toEqual(shapesColortest);
        })
    })
})