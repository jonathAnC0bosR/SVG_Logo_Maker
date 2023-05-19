class Shape {
    constructor(text, textColor, shapesColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapesColor = shapesColor;
    };
}

function Circle(text, texColor, shapesColor, shape) {
    Shape.call(this, text, texColor, shapesColor);
    this.shape = shape;
}

function Triangle(text, texColor, shapesColor, shape) {
    Shape.call(this, text, texColor, shapesColor);
    this.shape = shape;
}

function Rectangle(text, texColor, shapesColor, shape) {
    Shape.call(this, text, texColor, shapesColor);
    this.shape = shape;
}

module.exports = {Circle, Triangle, Rectangle};