// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  } else {
  return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`
  } else {
  return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
   `The application is covered under ${license} license`
    )
  } else {
  return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(encodeURI(data.license))}

  ## Description 
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installations)

  * [Usage information](#usage)

  * [Contribution guidelines](#contribution-guidelines)

  * [Test instructions](#test-instructions)

  ${renderLicenseLink(data.license)}
   
  * [Questions](#questions)

  ## Installations

  ${data.installation}
 

  ## Usage

  ${data.usage}

  ## Contribution guidelines

  ${data.contribution}

  ## Test instructions

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any additional questions, please contact me:
  

  * GitHub: [${data.GitHubName}](https://github.com/${data.GitHubName}/)
  * Email: ${data.email}


`;
}

module.exports = generateMarkdown;
