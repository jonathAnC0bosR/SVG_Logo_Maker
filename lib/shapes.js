class Shape {
    constructor(text, textColor, shapesColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapesColor = shapesColor;
    };
}

class Circle extends Shape {
    constructor(text, texColor, shapesColor, shape) {
        super(text, texColor, shapesColor);
        this.shape = shape;
    }
}

class Triangle extends Shape {
    constructor(text, texColor, shapesColor, shape) {
        super(text, texColor, shapesColor);
        this.shape = shape;
    }
}

class Rectangle extends Shape {
    constructor(text, texColor, shapesColor, shape) {
        super(text, texColor, shapesColor);
        this.shape = shape;
    }
}

const myTriangle = new Triangle('svg', 'red', 'red', 'triangle');
console.log(myTriangle);

module.exports = {Circle, Triangle, Rectangle};