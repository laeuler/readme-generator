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
  return `
  
  # ${title}
  [![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)](https://opensource.org/licenses/${license})
  
# Description
${description}

# Table of Content
- [Description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [License](#License)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)
- [Screenshots](#Screenshots)


# Installation
\`\`\`${instructions}\`\`\`

# Usage
${usage}

# License
${license}


# Contributing
Please reach out to ${githubname} for further information on how to contribute to this project.

Contributors so far:
${contributors}

# Tests
${test}


# Questions
In case of questions, please contact the creator via
- GitHub Profile: https://github.com/${githubname}
- Mail: ${usermail} (please use the following subject: ${title}, I will follow up as soon as possible)

# Screenshots
`;
};

//Export the createReadme function to index.js
module.exports = createReadme;
