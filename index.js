//Links to the local file "generateMarkdown.js".
const generateMarkdown = require("./utils/generateMarkdown");

//Brings in Inquirer database and filesystem.
const inquirer=require('inquirer');
const fs=require('fs');

//Creates prompts for user to input answers to questions, using Inquirer.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is the project installed?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What are the usage instructions?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your project.',
        choices: ['MIT','Apache 2.0', 'GPL 3.0', 'BSD3','none']
      }
  ])
  //
  .then((data) => {
    const markdown = generateMarkdown(data);

    fs.writeFile('dist/README.md', markdown, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  })
  
  .catch((error) => {
    console.log(error);
  });


