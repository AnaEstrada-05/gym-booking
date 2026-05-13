import { Component, signal } from '@angular/core';
import { BookingListComponent } from './components/booking-list/booking-list';
import { BookingDetailComponent } from './components/booking-detail/booking-detail';
import { Booking } from './models/booking.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingListComponent, BookingDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  selectedBooking = signal<Booking | null>(null);

  onBookingSelected(booking: Booking) {
    this.selectedBooking.set(booking);
  }
}