exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.harmburger_button = page.getByRole('img', { name: 'menu bar' })
        this.first_login_button = page.getByRole('navigation')
        this.username_textbox = page.getByPlaceholder('Username/Email')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })

    }

    async gotoLoginPage(){
        await this.page.goto('https://asp-vultelanding3-prod-southuk-01-qa.azurewebsites.net/')
    }

    async login(username, password){

        await this.harmburger_button.click()
        await this.first_login_button.click()
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }


}