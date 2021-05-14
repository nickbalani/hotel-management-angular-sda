import { Component, OnInit } from '@angular/core';
import {Room, RoomService} from '../../services/room.service';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.updateReservations();
  }

  updateReservations(): void {
    this.roomService.getAll().subscribe(response => {
      this.rooms = response;
    });
  }

}
