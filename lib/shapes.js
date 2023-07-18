class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    render() {
        // Calculate the new points for the smaller and centered triangle
        const centerX = 500; // Assuming the original SVG canvas has a width of 1000
        const centerY = 425; // Assuming the original SVG canvas has a height of 1000
        const halfSize = 200; // Half of the new triangle size

        const points = [
            `${centerX}, ${centerY - halfSize}`,
            `${centerX - halfSize}, ${centerY + halfSize}`,
            `${centerX + halfSize}, ${centerY + halfSize}`
        ].join(" ");

        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`;
    }
}
module.exports = {Circle, Triangle, Square};
