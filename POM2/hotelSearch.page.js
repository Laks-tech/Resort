export class HotelSearch{
    constructor(page){
        this.page=page
        this.locationDropdown = page.locator("#location")
        this.hotelsDropdown=page.locator('#hotels')
        this.roomtypeDropdown=page.locator('#room_type')
        this.roomnumberDropdown=page.locator('#room_nos')
        this.CheckinDate=page.locator('#datepick_in')
        this.CheckoutDate=page.locator('#datepick_out')
        this.adultRoomType=page.locator('#adult_room')
        this.searchBtn=page.locator('#Submit')
    }
}