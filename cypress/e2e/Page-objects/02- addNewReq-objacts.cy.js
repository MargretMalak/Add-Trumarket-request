class AddNewReq{


    get AddBtn(){
         return cy.get(".tru-button").contains("Add");
    }

    get selectNewReq(){
         return cy.get('.open > .animate__animated > :nth-child(1)');
    }

  
    get SelectClient(){
         return cy.get('.ant-select-selector').contains('Select Client');    
    }

    get  selectedClient(){
         console.log(cy.contains('Elmar Test'))
         return cy.get('#root > div > div.open-popover > div > div > div.popover-content > div > div > form > div > div.select-client-add-user-wrapper > div > div')
         .type("Elmar Test")
         .get('.select-client-add-user-wrapper .ant-select-selection-item').first()
     //     return cy.contains('Elmar Test');
    }


 /*get selectStatus(){
  cy.get('.ant-form-item-is-validating > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector > .ant-select-selection-item').contains('New');
 }

get selectBranch(){
  cy.get(':nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector > .ant-select-selection-item').contains('Trufla Location');
}*/

get ContinueBtn(){
  cy.wait(10000),
  console.log("continue clicked");

  return( 
    cy.get("[type='submit']").contains('Continue').should('be.visible')
    //cy.get('[data-top="479.8399816894531"]').contains('Continue').should('be.visible')
     //cy.xpath('//*[@id="root"]/div/div[5]/div/div/div[2]/div/div/form/div/div[7]/div/div/div/div/div/div[1]/button[1]').contains('Continue').should('be.visible')
        //xpath-->  *[@id="root"]/div/div[5]/div/div/div[2]/div/div/form/div/div[7]/div/div/div/div/div/div[1]/button[1]
    //cy.get('.btn-actions-container > :nth-child(1) > .primary').contains('Continue').should('be.visible')
    //cy.get('#root > div > div.open-popover > div > div > div.popover-content > div > div > form > div > div:nth-child(7) > div > div > div > div > div > div:nth-child(1) > button.tru-button.primary.complete').contains('Continue').should('be.visible').click().click().wait(30000)
    
    
    // ----- QUICK ADD Steps
    //cy.get('.request-shared-dropdown > .tru-dropdown-menu').click(),
    //cy.get('.request-shared-dropdown > .tru-dropdown-menu > .animate__animated > :nth-child(1) > span').contains('Quick Add')
   
    
   )}





//   get getstatusassertion(){
//    cy.wait(10000);
  
//     return cy.get('.status').contains('New').should('be.visible')
//  }


}

export default new AddNewReq;