exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.harmburger_button = page.getByRole('img', { name: 'menu bar' })
        this.first_login_button = page.getByRole('navigation').getByText('Log In')
        this.username_textbox = page.getByPlaceholder('Username/Email')
        this.password_textbox = page.getByPlaceholder('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.logout_button = page.getByRole('button', { name: 'input icon Logout' })

    }

    async gotoLoginPage() {
        await this.page.goto('https://asp-vultelanding3-prod-southuk-01-qa.azurewebsites.net/')
    }

    async login(username, password) {

        await this.harmburger_button.click()
        await this.first_login_button.click()
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await this.logout_button.click()

    }


}