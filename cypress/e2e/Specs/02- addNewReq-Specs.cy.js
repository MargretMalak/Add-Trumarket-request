
//import cypress from "cypress";
//import { beforeEach } from "mocha";
//import cypress from "cypress";
//import { it } from "mocha";
import loginPage from "../Page-objects/01- login-objects.cy"

import AddNewReq from "../Page-objects/02- addNewReq-objacts.cy"


/**beforeEach(() => {
    cy.getCookies().should('not.be.empty')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })**/


it("open login page" , ()=> {
    loginPage.open();

//loginusername --> method name
    loginPage.loginusername.click();

//loginpassword --> method name
    loginPage.loginpassword.click();

//loginbtn--> method name
    loginPage.loginbtn.click();

})

// add new request popover fields filling
it("Add new request" , ()=> {

AddNewReq.AddBtn.click();

AddNewReq.selectNewReq.click();

//AddNewReq.selectStatus.click()

AddNewReq.SelectClient.click();

AddNewReq.selectedClient.click();

//AddNewReq.selectBranch.click();
cy.wait(10000);
AddNewReq.ContinueBtn.click();
//AddNewReq.ContinueBtn.click();
//cy.request("https://api.trumarket.dev/request-management/instances");
//cy.wait(150000);

//AddNewReq.getstatusassertion();




}
)


