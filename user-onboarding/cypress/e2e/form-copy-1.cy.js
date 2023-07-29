// Write tests here

describe("Form App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // HELPERS AKA GETTERS
  const usernameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const foobarInput = () => cy.get("input[name=foobar]");
  const termsOfService = () => cy.get('[type = "checkbox"]');
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);

  it("sanity check to make sure tests work", () => {
    // "it" is a test
    // "expect" is an assertion
    // There can be multiple assertions per test, bu they all need to relate to the "one thing" that we're testing

    expect(1+2).to.equal(3);
    expect(2+2).not.equal(5); // ALWAYS USE TRIPLE EQUALS WHEN COMPARING NUMBERS
    expect({}).not.to.equal({}); // OBJECTS ARE NOT EQUAL SINCE THEY POINT TO DIFFERENT PLACES IN MEMORY
    expect({}).to.eql({}); // ==
})

// CI/CD -> Continuous Integration/ Continuous Delivery
it("the proper elements are showing", () => {
  usernameInput().should("exist");
  emailInput().should("exist");
  passwordInput().should("exist");
  foobarInput().should("not.exist");
  termsOfService().should("exist");
  submitBtn().should("exist");

 

})

describe("filling out the inputs and cancelling", () => {
  it("can type in the inputs", () => {
    usernameInput()
      .should("have.value", "")
      .type("iamthebest")
      .should("have.value", "iamthebest");

      emailInput()
       .should("have.value", "")
       .type("whereareyou@yahoo.com")
       .should("have.value", "whereareyou@yahoo.com");
       
      passwordInput()
       .should("have.value", "")
       .type("TheGreatest")
       .should("have.value", "TheGreatest");

       
  })

  it("can check a checkbox", () => {
    termsOfService().check();
  })

  it("the submit button enables when all inputs are filled out", () => {
    usernameInput().type("Sigfreid");
    emailInput().type("howareyou@gmail.com");
    passwordInput().type("TheDarkKnight");
    termsOfService().check();
    submitBtn().should("not.be.disabled");
    submitBtn().click();
  })

  it("the submit button disables if an input is left empty", () => {
    usernameInput().type("JohnDoe");
    emailInput().type("whatsup@aol.com");
    passwordInput().should("have.value", ""); 
    termsOfService().check();
    submitBtn().should("be.disabled");
  }) 
}) 















})