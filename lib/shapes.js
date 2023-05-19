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

class Square extends Shape {
    constructor(text, texColor, shapesColor, shape) {
        super(text, texColor, shapesColor);
        this.shape = shape;
    }
}

module.exports = {Circle, Triangle, Square};