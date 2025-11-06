// POM/homePage.page.js
export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkInDate = page.getByLabel('Chech-in Date');
    this.checkOutDate = page.getByLabel('Chech-out Date');
    this.checkAvailability = page.getByRole('button', { name: 'Check Availability' });
  }

  // Navigate to home page
  async navigateToHome() {
    await this.page.goto(
      'http://49.249.28.218:8081/TestServer/Build/Hotel_Booking_Management_System/index.php?page=home',
      { waitUntil: 'domcontentloaded' }
    );
  }

  // Fill dates and click availability
  async searchAvailability(checkin, checkout) {
    await this.checkInDate.fill(checkin);
    await this.checkOutDate.fill(checkout);
    await this.checkAvailability.click();
    console.log('✅ Checked hotel availability.');
  }
}




