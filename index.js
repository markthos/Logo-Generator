const fs = require('fs');
const inquirer = require('inquirer');

function createLogo(text, textColor, shape, shapeColor) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="300" height="200" fill="${shapeColor}" />
    ${getShapeSvg(shape, textColor)}
    <text x="150" y="130" fill="white" text-anchor="middle">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
}

function getShapeSvg(shape, color) {
  switch (shape) {
    case 'circle':
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    case 'triangle':
      return `<polygon points="150,50 100,150 200,150" fill="${color}" />`;
    case 'square':
      return `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
    default:
      return '';
  }
}

function main() {
  inquirer
    .prompt([
      { name: 'text', message: 'Enter up to three characters:' },
      { name: 'textColor', message: 'Enter the text color (keyword or hexadecimal):' },
      { name: 'shape', message: 'Choose a shape (circle, triangle, square):' },
      { name: 'shapeColor', message: 'Enter the shape color (keyword or hexadecimal):' },
    ])
    .then((answers) => {
      createLogo(answers.text.slice(0, 3), answers.textColor, answers.shape, answers.shapeColor);
      console.log('Generated logo.svg');
    });
}

main();

module.exports = { createLogo, getShapeSvg };