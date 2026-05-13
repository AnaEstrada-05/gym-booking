import { Component, input, output, signal, effect } from '@angular/core';
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
  bookingClosed = output<void>();
  reserved = signal(false);
  reserveError = signal(false);
  toastVisible = signal(false);

  constructor() {
    effect(() => {
      if (this.booking()) {
        this.reserved.set(false);
        this.reserveError.set(false);
        this.toastVisible.set(false);
      }
    });
  }

  reserve() {
    if (this.booking()!.availableSpots === 0) {
      this.reserveError.set(true);
    } else {
      this.reserved.set(true);
      this.reserveError.set(false);
    }
    this.showToast();
  }

  private showToast() {
    this.toastVisible.set(true);
    setTimeout(() => this.toastVisible.set(false), 3000);
  }

  close() {
    this.bookingClosed.emit();
  }
}