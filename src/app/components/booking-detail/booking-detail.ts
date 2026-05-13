import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.html',
  styleUrl: './booking-detail.css'
})
export class BookingDetailComponent {
  booking = input<Booking | null>(null);
  reserved = signal(false);

  reserve() {
    this.reserved.set(true);
  }
}