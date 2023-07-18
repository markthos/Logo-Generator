// Testsuite: shapes.test.js
const { Circle, Square, Triangle } = require('./shapes');
// Imports the Circle, Square, and Triangle classes from lib/shapes.js

// This testsuite checks whether "Circle", "Square", and "Triangle" can be correctly rendered as SVGs with expected results.

//Circle Shape
describe('Circle', () => {
    it('should render a circle SVG', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();
        expect(svg).toBe('<circle cx="50%" cy="50%" r="100" fill="red" />');
    }
    );
});

//Square Shape
describe('Square', () => {
    it('should render a square SVG', () => {
        const square = new Square();
        square.setColor('blue');
        const svg = square.render();
        expect(svg).toBe('<rect x="25%" y="25%" width="50%" height="50%" fill="blue" />');
    }
    );
});

//Triangle Shape
describe('Triangle', () => {
    it('should render a triangle SVG', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const svg = triangle.render();
        expect(svg).toBe(`<polygon points="500, 225 300, 625 700, 625" fill="green" />`);
    }
    );
});

