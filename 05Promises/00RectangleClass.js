class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    static myShape() {
        console.log("Rectangle");
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

//create instance of Rectangle class
const r1 = new Rectangle(10, 20, "red");
console.log(r1.area());
console.log(r1.color);
console.log(r1.perimeter());
Rectangle.myShape();
