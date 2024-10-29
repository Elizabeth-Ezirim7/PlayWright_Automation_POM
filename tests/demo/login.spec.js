import { test} from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('solomon23@gmail.com', 'Test123$')


  
  //await page.goto('https://asp-vultelanding3-prod-southuk-01-qa.azurewebsites.net/');
  //await page.getByRole('img', { name: 'menu bar' }).click();
  //await page.getByRole('navigation').getByText('Log In').click();
  //await page.getByPlaceholder('Username/Email').click();
  //await page.getByPlaceholder('Username/Email').fill('solomon23@gmail.com');
  //await page.getByPlaceholder('Username/Email').click();
  //await page.getByPlaceholder('Password').click();
  //await page.getByPlaceholder('Password').fill('Test123$');
  //await page.getByRole('button', { name: 'Login' }).click();
  //await page.goto('https://asp-vulteretail-prod-southuk-01-qa.azurewebsites.net/');
  //await page.getByRole('button', { name: 'input icon Logout' }).click();
});