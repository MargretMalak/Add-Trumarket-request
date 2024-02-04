import loginPage from "../Page-objects/01- login-objects.cy"

it("hitting on a specific request", ()=> {
    cy.visit("https://bestinsurance.trumarket.dev/requests/c5a29ba6-3103-404b-bf1f-946a5d97048c");
    loginPage.open();
    
    //loginusername --> method name
        loginPage.loginusername.click();
    
    //loginpassword --> method name
        loginPage.loginpassword.click();
    
    //loginbtn--> method name
        loginPage.loginbtn.click();
        cy.wait(150000)
    })

   /**it("open login page" , ()=> {
       
    
    })**/
