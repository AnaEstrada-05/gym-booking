import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, delay } from 'rxjs';
import { Booking } from '../models/booking.model';

const MOCK_BOOKINGS: Booking[] = [
  { id: 1, className: 'Yoga', instructor: 'Laura Gómez', schedule: 'Lunes 18:00', availableSpots: 10 },
  { id: 2, className: 'Crossfit', instructor: 'Martín López', schedule: 'Martes 07:00', availableSpots: 5 },
  { id: 3, className: 'Spinning', instructor: 'Carla Ruiz', schedule: 'Miércoles 19:30', availableSpots: 0 },
  { id: 4, className: 'Pilates', instructor: 'Sofía Herrera', schedule: 'Jueves 10:00', availableSpots: 3 },
  { id: 5, className: 'Funcional', instructor: 'Diego Paz', schedule: 'Viernes 08:00', availableSpots: 8 },
];

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/api/bookings')) {
    return of(new HttpResponse({ status: 200, body: MOCK_BOOKINGS })).pipe(delay(800));
  }
  return next(req);
};