import { Component, OnInit } from '@angular/core';
import {RoomType, RoomTypeService} from '../../services/roomType.service';

@Component({
  selector: 'app-room-types-table',
  templateUrl: './room-types-table.component.html',
  styleUrls: ['./room-types-table.component.css']
})
export class RoomTypesTableComponent implements OnInit {
  roomTypes: RoomType[] = [];
  constructor(private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.updateReservations();
  }

  updateReservations(): void {
    this.roomTypeService.getAll().subscribe(response => {
      this.roomTypes = response;
    });
  }

}
