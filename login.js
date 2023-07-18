exports.LoginPage = class LoginPage {

    constructor(page) {
        
        // constructor definiing all the locator
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { button: ' Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');

    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}