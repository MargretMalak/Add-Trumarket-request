describe("Createnewrequest", () => {
  it("tests Createnewrequest", () => {
    //cy.viewport(1519, 391);
    cy.visit("https://sso.trufla.dev/realms/bestinsurance/protocol/openid-connect/auth?client_id=trumarket-web&redirect_uri=https%3A%2F%2Fbestinsurance.trumarket.dev%2Frequests&state=e3bd4c35-37da-47fc-b5a0-14a28db2a968&response_mode=fragment&response_type=code&scope=openid&nonce=e734a8d0-6f45-4d42-9981-079927c2bead");
    cy.get("#username").click();
    cy.get("#username").type("margret.r@trufla.com");
    cy.get("#password").click();
    //cy.get("#password").type("M");
    cy.get("#password").type("Maggie@12345");
    cy.get("#kc-login").click();
    //cy.location("href").should("eq", "https://bestinsurance.trumarket.dev/requests#state=e3bd4c35-37da-47fc-b5a0-14a28db2a968&session_state=42f26df4-3e06-4d19-beee-526d167c6186&iss=https%3A%2F%2Fsso.trufla.dev%2Frealms%2Fbestinsurance&code=7b39c3c9-3f75-4cf7-b5c3-ca9c8e734f0b.42f26df4-3e06-4d19-beee-526d167c6186.7b0280de-a4b1-40ff-a6eb-967af8484dca");
    cy.get("span:nth-of-type(1) > button").click();
    cy.get("div.header-right a:nth-of-type(1)").click();
    cy.get("div.select-client-add-user-wrapper div.ant-form-item-control > div > div > div > div").click();
    cy.get("div.ant-select-item-option-active > div").click();
    cy.get("d").click();
  });
});
