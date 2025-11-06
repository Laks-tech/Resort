// tests/hotelBooking.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/homePage.page.js';
import { Rooms } from '../POM/roomlist.page.js';
import { BookingDetails } from '../POM/booking.page.js';
import testData from '../Test_Data/data.json' assert { type: 'json' };

test('Hotel management end-to-end booking', async ({ page }) => {
  const data = testData[0]; // read first dataset

  const home = new HomePage(page);
  const room = new Rooms(page);
  const booking = new BookingDetails(page);

  // Step 1: Navigate to home page
  await home.navigateToHome();

  // Step 2: Check availability
  await home.searchAvailability(data['check-in'], data['check-out']);

  // Step 3: Select room
  await room.selectRoom();

  // Step 4: Fill booking details
  await booking.fillBookingDetails(data.name, data.contact, data.check_in_time);

  // Step 5: Validate success message
  const successMsg = await page.locator('.alert-success, #success_message').textContent();
  expect(successMsg.toLowerCase()).toContain('successfully');
  console.log('🎉 Booking completed successfully.');
});
