describe("eCommerce-playground Login Page Validation", () => {
  let emailInput, passwordInput, submitButton, forgotPasswordLink; //for global usage
  beforeEach(() => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.get(
      "#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title"
    ).trigger("mouseover");
    cy.get(
      ".mz-sub-menu-96 > :nth-child(1) > .icon-left > .info > .title"
    ).click();
    // Store login elements in variables
    emailInput = cy.get('input[name="email"]');
    passwordInput = cy.get('input[name="password"]');
    submitButton = cy.get('input[type="submit"]');
    forgotPasswordLink = cy.get('a[href*="forgotten"]');
  });

  it("verify the login page URL and elements", () => {
    // Assertions on URL
    cy.url().should("contain", "index.php");
    cy.url().should("include", "route=account/login"); // Verify the URL
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    //Assertion on Elements
    cy.get("h2").contains("Returning Customer"); // Check for the presence of "Returning Customer" text
    emailInput.should("be.visible"); // Verify Email input is visible
    passwordInput.should("be.visible"); // Verify Password input is visible
    submitButton.should("be.visible"); // Verify Login button is visible
    forgotPasswordLink.should("be.visible"); // Verify Forgot Password link is visible
  });
  //Positive Case
  it("Login with valid credentials", () => {
    emailInput.type("vanithaecommerce@gmail.com");
    cy.wait(3000);
    passwordInput.type("ecommerce", { log: false }); //password masking
    submitButton.click();

    //Assertion after successful Login attempt:
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
    );
    cy.get(".breadcrumb-item.active").should("have.text", "Account");
    cy.get("h2").contains("My Account");
  });

  //Negative Case
  it("Login with invalid credentials", () => {
    emailInput.type("123@gmail.com");
    cy.wait(3000);
    passwordInput.type("ECOMMERCE", { log: false }); //password masking
    submitButton.click();
    cy.wait(3000);

    //verify the error message with OR Logic method
    cy.get(
      '#account-login>[class="alert alert-danger alert-dismissible"]'
    ).should((alert) => {
      const alerttext1 = alert.text();
      expect(alerttext1).to.include(
        " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
      ) ||
        expect(alerttext1).to.include(
          " Warning: No match for E-Mail Address and/or Password."
        );
    });
    // Assertion to verify the URL remains on login page
    cy.url().should("include", "route=account/login");
  });
  

  // Exception Case
  it.only("Verify login without entering any credentials", () => {
    submitButton.click(); //click on the Login button without passing  the credentials
    //Assertions on error message with 'OR' Logic
    cy.get("#account-login > .alert.alert-danger.alert-dismissible").should(
      (alert) => {
        const alerttext2 = alert.text();
        expect(alerttext2).to.include(
          " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
        ) ||
          expect(alerttext2).to.include(
            " Warning: No match for E-Mail Address and/or Password."
          );
      }
    );
  });
});
