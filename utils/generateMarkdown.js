

//Creates a function that returns a license badge based on which license is passed in. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license!=="none")
  return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  return''
}
  
//Creates a function that returns the license link. If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license!=="none")
  return`- [License](#license)`
  return``
}

//Creates a function that returns the license section of README. If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license!=="none")
  return`## License\n This project is licensed under the ${license} license.`
return``
}

//Creates a function to generate markdown for README.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.instructions}
  ## Contribution
  ${data.contributions}
  ${renderLicenseSection(data.license)}
  ## Testing
  ${data.testing}
  ## Questions
  If you have any questions, you can email me at ${data.email}. If you want to see more of my work you can visit my Github at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
