// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const { error } = require("console");

// TODO: Create an array of questions for user input
const questions = [
  {
    //each question goes inside {},
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Why did you build this project? What problem does it solve? What was your motivation to solve this problem?",
    name: "descriptionWhy",
  },
  {
    type: "input",
    message: "What did you learn while building this project?",
    name: "descriptionLearn",
  },
  {
    type: "input",
    message: "What steps are requireed to install this project?",
    name: "installation",
  },
  {
    type: "input",
    message:
      "What instructions are needed to use this project? (Add screenshots to 'assets/images' as needed.)",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please list any collaborators, with links to their GitHub profiles:",
    name: "creditsCollab",
  },
  {
    type: "input",
    message:
      "Please list any third-party assets that require attribution, including the creators with links to their primary web presence:",
    name: "creditsThirdParty",
  },
  {
    type: "input",
    message:
      "Please list links to any tutorials that you followed while creating this project:",
    name: "creditsTutorial",
  },
  {
    type: "list",
    message: "Please choose a license for this project:",
    choices: ["License Type 1", "License Type 2", "License Type 3"],
    name: "license",
  },
];

// TODO: Create a function to write README file
// function writeToFile(README1.md, data, (err) =>
//   err ? console.error(err) : console.log('README file generated successfully!')
// )
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    console.log(template);
  });
}

// Function call to initialize app
init();
