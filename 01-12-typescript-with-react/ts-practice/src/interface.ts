/* 인터페이스를 이용하여  implements로 구현하기 */

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    // radius: number;

    // constructor(radius: number) {
    //     this.radius = radius;
    // }

    // constructor(public radius: number){
    constructor(private radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

// 사용예제 #1
function getCircleArea(circle: Circle) {
    return circle.getArea();
}

// 사용예제 #2
const shapes: Shape[] = [circle, rectangle];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
