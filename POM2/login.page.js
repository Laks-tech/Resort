export class LoginPage{
    constructor(page){

        this.page=page
        this.loginUsernameTxtField=page.locator('#username')
        this.loginPsdTxtField=page.locator('#password')
        this.loginBtn=page.locator('#login')
    }
}