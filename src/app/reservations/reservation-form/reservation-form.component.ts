import {Component, OnInit} from '@angular/core';
import {Reservation, ReservationService} from '../../services/reservation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Room, RoomService} from '../../services/room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm = new FormGroup({});
  rooms: Room[] = [];

  constructor(private roomService: RoomService,
              private reservationService: ReservationService,
              private router: Router,
              private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.reservationService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((item) => {
          this.reservationForm = this.createReservationForm(item);
        });
    } else {
      this.reservationForm = this.createReservationForm({
        id: 0,
        client: {
          id: 0
        },
        room: {
          id: 0
        }
      } as Reservation);
    }

    this.roomService.getAll().subscribe(x => {
      this.rooms = x;
    });
  }

  createReservationForm(reservation: Reservation): FormGroup {
    return new FormGroup({
      id: new FormControl(reservation.id),
      checkIn: new FormControl(reservation.checkIn, Validators.required),
      checkOut: new FormControl(reservation.checkOut, [Validators.required]),
      clientName: new FormControl(reservation.client.name, Validators.required),
      clientEmail: new FormControl(reservation.client.email, [Validators.required, Validators.email]),
      clientPhone: new FormControl(reservation.client.phoneNumber, Validators.required),
      roomId: new FormControl(reservation.room.id, [Validators.required, Validators.min(1)]),
    });
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }
}
