export class SelectHotel{
    constructor(page){
        this.page=page
        this.radioBtn=page.locator('#radiobutton_0')
        this.continueBtn=page.locator('#continue')
    }
}