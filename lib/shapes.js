class Shape {
    constructor(text, textColor, shapesColor) {
        if(text.length > 3) {
            throw new Error('Text must be 3 characters long!')
        }
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

class Square extends Shape {
    constructor(text, texColor, shapesColor, shape) {
        super(text, texColor, shapesColor);
        this.shape = shape;
    }
}

module.exports = {Circle, Triangle, Square};