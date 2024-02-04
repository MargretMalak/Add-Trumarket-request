//const cypress = require("cypress");

class loginPage {
    open() {
        cy.visit("https://bestinsurance.trumarket.dev/requests");
    }


    get loginusername(){
       return cy.get("#username").click().type("margret.r@trufla.com");
    }


    get loginpassword(){
        return cy.get("#password").click().type("Maggie@12345"); 
    }

    get loginbtn(){
        return cy.get('#kc-login');
    }
  
}
export default new loginPage();
