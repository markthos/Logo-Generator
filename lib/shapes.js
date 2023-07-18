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
class Triangle extends Shape{
    render(){
        return `<polygon points="50%,0 0,100% 100%,100%" fill="${this.color}" />`;
    }
}
class Square extends Shape{
    render(){
        return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`;
    }
}
module.exports = {Circle, Triangle, Square};
