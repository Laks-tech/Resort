// POM/booking.page.js
export class BookingDetails {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.name = page.locator('#name');
    this.contact = page.locator('#contact');
    this.checkInTime = page.locator('#date_in_time');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async fillBookingDetails(name, contact, checkInTime) {
    await this.name.fill(name);
    await this.contact.fill(contact.toString());
    await this.checkInTime.fill(checkInTime);
    await this.saveBtn.click();
    console.log('✅ Booking details filled and saved.');
  }
}














  

 
  
