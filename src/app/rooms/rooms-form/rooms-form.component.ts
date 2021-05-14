import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Room, RoomService} from '../../services/room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomType, RoomTypeService} from '../../services/roomType.service';

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.css']
})
export class RoomsFormComponent implements OnInit {
  roomForm = new FormGroup({});
  roomTypes: RoomType[] = [];

  constructor(private roomService: RoomService,
              private roomTypeService: RoomTypeService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.roomService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((item) => {
          this.roomForm = this.createRoomForm(item);
        });
    } else {
      this.roomForm = this.createRoomForm(
        {
          id: 0,
          type: {
            id: 0
          }
        } as Room);
    }

    this.roomTypeService.getAll().subscribe(x => {
      this.roomTypes = x;
    });
  }

  createRoomForm(room: Room): FormGroup {
    return new FormGroup({
      id: new FormControl(room.id),
      name: new FormControl(room.name, Validators.required),
      roomTypeId: new FormControl(room.type.id, [Validators.required, Validators.min(1)]),
    });
  }

  onSubmit(): void {
    this.roomService.save(this.roomForm.value)
      .subscribe(response => {
        return this.router.navigate(['/rooms']);
      });
  }
}
