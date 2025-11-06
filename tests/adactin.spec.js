import {test,expect} from '@playwright/test'
import { LoginPage } from '../POM2/login.page'
import { HotelSearch } from '../POM2/hotelSearch.page'
import { SelectHotel } from '../POM2/selectHotel.page'
import { BookingDetail } from '../POM2/bookingdetails.page'
test('hotel management', async({page})=>{

    await page.goto('https://adactinhotelapp.com/index.php')
   
    let loginpage=new LoginPage(page)
    await loginpage.loginUsernameTxtField.fill('lakshmi012345')
    await loginpage.loginPsdTxtField.fill('user@1234')
    await loginpage.loginBtn.click()

    let searchhotelpage=new HotelSearch(page)
    await expect(page).toHaveTitle("Adactin.com - Search Hotel")
    await searchhotelpage.locationDropdown.selectOption("Sydney")
    await searchhotelpage.hotelsDropdown.selectOption("Hotel Creek")
   await searchhotelpage.CheckinDate.selectOption("Deluxe")
   await searchhotelpage.adultRoomType.selectOption("1 - One")
   await searchhotelpage.CheckinDate.fill("15/10/2025")
    await searchhotelpage.CheckoutDate.fill("16/10/2025")
    await searchhotelpage.adultRoomType.selectOption("1 - One")
   await searchhotelpage.searchBtn.click()
    

    await expect(page).toHaveTitle("Adactin.com - Select Hotel")
    let hotellist=new SelectHotel(page)
    await hotellist.radioBtn.check()
    await hotellist.continueBtn.click()
    

await expect(page).toHaveURL('https://adactinhotelapp.com/BookHotel.php')
let bookingdetail= BookingDetail(page)
await bookingdetail.firstnameTextfield.fill("laks")
await bookingdetail.lastnameTxtField.fill("sin")
  await bookingdetail.addressTxtfield.fill("bangalore")  
   await bookingdetail.creditTxtField.fill('1234567891234567') 
// await bookingdetail.
    
    

    await page.locator('#cc_type').selectOption("American Express")
    await page.locator('#cc_exp_month').selectOption("January")
    await page.locator('#cc_exp_year').selectOption("2029")
    await page.locator('#cc_cvv').fill('1234')
    await page.locator('#book_now').click()

    await expect(page).toHaveTitle('Adactin.com - Book A Hotel')
})