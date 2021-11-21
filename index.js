//insert, connect required modules
const inquirer = require("inquirer");

//create array of questions to determine content of the README
const content = [
  {
    //specifies the type of input
    type: "input",
    //the message the user will face as instructions before providing the input
    message:
      "Some generic information about you at first: what is your GitHub User Name?",
    //variable name
    name: "githubname",
  },
  {
    type: "input",
    message: "Please provide a mail you can be contacted regarding the project",
    name: "usermail",
  },
  {
    type: "input",
    message:
      "Please choose a name for your project. Kebap-Case is recommended. Example: my-new-readme-generator",
    name: "title",
  },
  {
    type: "input",
    message:
      "Please describe the targeted outcome of the code in a few sentences",
    name: "description",
  },
  {
    type: "input",
    message: "Please explain how to install your application",
    name: "instructions",
  },
  {
    type: "input",
    message: "Please give some info on how to use the module",
    name: "usage",
  },
  {
    type: "input",
    message: "Who worked with you on the project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How can the application be tested?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Under which type of license is the application covered?",
    name: "license",
    choices: ["MIT", "IBM", "not specified"],
  },
];

//code to trigger the content creation process

const inquirerAsync = async (content) => {
  try {
    //prompt the questions to get answers
    const answers = await inquirer.prompt(content);

    //log answers
    console.log(answers);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

//call the function
inquirerAsync(content);
