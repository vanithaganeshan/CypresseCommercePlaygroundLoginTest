## Cypress - Project Overview 

**URL:** https://ecommerce-playground.lambdatest.io

This project automates login functionality testing for "e-commerce-playground-lambdatest" using Cypress. It covers positive, negative, and exception scenarios to ensure the application behaves as expected.

## Test Cases

1. **Positive Test Case:** Verify login with valid credentials.
    * Steps:
        * Enter valid email and password.
        * Click the login button.
    * Expected Result: User is redirected to the account page.

2. **Negative Test Case:** Verify login fails with incorrect credentials.
    * Steps:
        * Enter invalid email or password.
        * Click the login button.
    * Expected Result: An error message is displayed.

3. **Exception Test Case:** Verify login without entering any credentials.
    * Steps:
        * Leave email and password fields empty.
        * Click the login button.
    * Expected Result: An appropriate error message is shown.

## Project Setup

**Requirements:**

* **Internet Connection:** Required to access the eCommerce Playground website.
* **Node.js (version 14 or higher):** Needed to run the application and dependencies.
* **Cypress:** Installed via npm.
* **npm (Node Package Manager):** Typically installed with Node.js, used for managing packages.
* **Git:** Required for cloning the repository and managing version control.

**Clone the Repository**

git clonehttps://github.com/vanithaganeshan/cypress-ecommerce-playground-login-test.git
cd cypress-ecommerce-playground-login-test

**Install Cypress**

(Run this command in the terminal to install Cypress)

npm install cypress --save-dev

## Running Tests

**GUI Mode**

1. Open the Cypress Test Runner with this command:

npx cypress open


**Headless Mode**

1. Run tests without the GUI using this command:

npx cypress run


## Viewing Test Reports

* **Command Line Execution:**
    * Passed tests are shown in green.
    * Failed tests are shown in red.
    * Screenshots of failed tests are saved in `cypress/screenshots`.
    * Videos of test runs are saved in `cypress/videos` (headless mode).

## Pushing Code to GitHub

1. **Commit changes:**

git add . git commit -m "Added login tests and updated README"


2. **Push code:**

git push origin <your_branch_name>


## Configuration Notes

* **VS Code Auto-Suggestion:** Enabled for improved coding efficiency. (This is a configuration setting within the project)
* **Disabled Command Logs:** Streamlines output during test execution. (This is a configuration setting within the project)
* **Auto Execution:** Set to false to allow for manual test execution. (This is a configuration setting within the project)

## Contributing

Fork the repository and create a pull request to contribute improvements.


## Detailed Manual Test Cases

Please refer to the following link for a detailed breakdown of the manual test cases:

https://docs.google.com/spreadsheets/d/1pqa_fwDHp0l0-8ZNJ_GTfMizLXwf3EbY/edit?usp=drive_link&ouid=108334062614341202510&rtpof=true&sd=true

