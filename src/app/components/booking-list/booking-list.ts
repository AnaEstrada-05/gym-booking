import { Component, OnInit, output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.css'
})
export class BookingListComponent implements OnInit {
  bookingSelected = output<Booking>();

  // Usamos signals para el estado
  bookings = signal<Booking[]>([]);
  loading = signal(true);
  error = signal(false);

  private bookingService = inject(BookingService);

  ngOnInit() {
    this.bookingService.getBookings().subscribe({
      next: (data) => {
        this.bookings.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  selectBooking(booking: Booking) {
    this.bookingSelected.emit(booking);
  }
}