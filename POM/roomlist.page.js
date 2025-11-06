// POM/roomlist.page.js
export class Rooms {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.bookNowBtn = page.getByRole('button', { name: 'Book now' }).last();
  }

  async selectRoom() {
    await this.bookNowBtn.click();
    console.log('✅ Selected room and clicked Book Now.');
  }
}


