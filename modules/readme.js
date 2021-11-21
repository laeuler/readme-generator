//function to generate the readme file

//Object Destructuring
const createReadme = (data) => {
  const {
    githubname,
    usermail,
    title,
    description,
    instructions,
    usage,
    contributors,
    test,
    license,
  } = data;

//Markdown from here
return `# ${title}

## Description
${description}

## Installation Instuctions
${instructions}`;
};

//Export the createReadme function to index.js
module.exports = createReadme;
