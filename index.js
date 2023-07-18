const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');

class Logo{
    constructor(){  
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){

      return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">' + this.shapeElement + this.textElement + '</svg>';
    }
    setTextElement(text,color) {
      this.textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="100">${text}</text>`;
    }
    setShapeElement(shape) {
      this.shapeElement = shape.render();
    }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters to be displayed in the logo:',
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter a color for the text:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape:',
  },
];

// Function to write data to svg file
function writeToFile(fileName, data) {
  console.log('Writing to file...');
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success, you have generated a logo!')
  );
}

// Function to initialize app
function init() {
  var logo = new Logo();
  inquirer.prompt(questions).then((answers) => {
    switch (answers.shape) {
      case 'Circle':
        var circle = new Circle();
        circle.setColor(answers.shapeColor);
        logo.setShapeElement(circle);
        break;
      case 'Square':
        var square = new Square();
        square.setColor(answers.shapeColor);
        logo.setShapeElement(square);
        break;
      case 'Triangle':
        var triangle = new Triangle();
        triangle.setColor(answers.shapeColor);
        logo.setShapeElement(triangle);
        break;
    }
    logo.setTextElement(answers.text, answers.color);
    writeToFile('logo.svg', logo.render());
  });
}

// Function call to initialize app
init();


