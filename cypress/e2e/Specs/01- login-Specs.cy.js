import loginPage from "../Page-objects/01- login-objects.cy"

//login page --> main class
it ("open login page" , ()=> {
    loginPage.open();

//loginusername --> method name
    loginPage.loginusername.click();

//loginpassword --> method name
    loginPage.loginpassword.click();

//loginbtn--> method name
    loginPage.loginbtn.click();

})


