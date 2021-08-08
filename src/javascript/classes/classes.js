// Defining Classes 
// Class declaration 

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color
    }
}

// Class Expression 
// Named 
let Rectangle = class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

// Unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

