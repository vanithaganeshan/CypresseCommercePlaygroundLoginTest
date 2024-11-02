## Project Overview
URL: https://ecommerce-playground.lambdatest.io
This project aims to automate the login functionality testing for "e-commerce-playgrounf-lambadatest" Cypress. The tests cover positive, negative, and exception scenarios to ensure the application behaves as expected.

Test Cases
This project includes the following test cases:

1. Positive Case
Test Case: Verify login with valid credentials.
  Steps:
  Enter valid email and password.
  Click the login button.
  Expected Result: User is redirected to the account page.

2. Negative Case
Test Case: Verify login fails with incorrect credentials.
  Steps:
  Enter invalid email or password.
  Click the login button.
  Expected Result: An error message is displayed.

3. Exception Case
Test Case: Verify login without entering any credentials.
  Steps:
  Leave email and password fields empty.
  Click the login button.
  Expected Result: An appropriate error message is shown.


To set up the Cypress framework and execute the tests, ensure you have the following installed on your machine:

- **Internet Connection**: A stable internet connection is required to access the eCommerce Playground website during testing.
- **Node.js** (version 14 or higher): This is required to run the application and its dependencies.
- **Cypress** (can be installed via npm)
- **npm** (Node Package Manager): Typically installed with Node.js, used for managing packages.
- **Git**: Necessary for cloning the repository and managing version control.

## Clone the Repository

To get started, clone the repository by running the following commands in the terminal:

For Windows, Linux, and macOS, use:

```bash
git clone https://github.com/vanithaganeshan/cypress-ecommerce-playground-login-test.git
cd cypress-ecommerce-playground-login-test

**Install Cypress**
npm install cypress --save-dev
This command will add Cypress as a development dependency for the project.

Open Cypress Test Runner
To open the graphical user interface of Cypress and view/run the tests, execute the following command:
npx cypress open

**Running Tests in Headless Mode
**If you prefer to run the tests in headless mode (without the GUI), execute the following command:
npx cypress run

Viewing Test Reports
When running tests in command-line mode, Cypress will execute all tests without opening the Test Runner GUI. The test results will display directly in the terminal, where:

Passed tests are shown in green.
Failed tests are shown in red.

Additionally:

Screenshots of failed tests are saved in the cypress/screenshots folder.
Videos of test runs (in headless mode) are saved in the cypress/videos folder.



After execution Push  the Code to GitHub:

Commit your changes, including your README.md and .gitignore files.
Push your code to the remote repository:
git add .
git commit -m "Added login tests and updated README"
git push origin <your-branch-name> 







Steps 

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vanithaganeshan/cypress-ecommerce-playground-login-test.git
Navigate to the project directory:

bash
Copy code
cd cypress-ecommerce-playground-login-test
Install the project dependencies:

bash
Copy code
npm install
Running the Tests
To run the tests, use the following command:

bash
Copy code
npx cypress open
This will open the Cypress Test Runner, where you can select and run the test files.

Alternatively, you can run the tests in headless mode using:

bash
Copy code
npx cypress run
Project Structure
plaintext
Copy code
cypress/
│
├── e2e/                     # Contains test files
│   └── eCommercePlayground.cy.js  # Test case for the login functionality
│
├── fixtures/                # Sample data for tests
│   └── example.json         # Example JSON file
│
└── support/                 # Support files and commands
    ├── commands.js          # Custom commands
    └── e2e.js               # Global configurations
│
package.json                 # Project dependencies and scripts
cypress.config.js            # Cypress configuration file
.gitignore                   # Files to be ignored by git
README.md                    # Project documentation
Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your changes.
