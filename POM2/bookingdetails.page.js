export class BookingDetail {
    constructor(page) {
        this.page = page
        this.firstnameTextfield = page.locator('#first_name')
        this.lastnameTxtField = page.locator('#last_name')
        this.addressTxtfield = page.locator('#address')
        this.creditTxtField = page.locator('#cc_num')
        this.credittypeTxtfield = page.locator('#cc_type')
        this.expirydropdown1 = page.locator('#cc_exp_month')
        this.expirydropdown2 = page.locator('#cc_exp_year')
        this.cvvTxtfield = page.locator('#cc_cvv')
        this.booknowBtn = page.locator('#book_now')

    }
}