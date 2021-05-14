import { Component, OnInit } from '@angular/core';
import {RoomType, RoomTypeService} from '../../services/roomType.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-room-type-manage',
  templateUrl: './room-type-manage.component.html',
  styleUrls: ['./room-type-manage.component.css']
})
export class RoomTypeManageComponent implements OnInit {
  roomTypeForm = new FormGroup({});

  constructor(private roomTypeService: RoomTypeService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.roomTypeService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((item) => {
          this.roomTypeForm = this.createRoomTypeForm(item);
        });
    } else {
      this.roomTypeForm = this.createRoomTypeForm({} as RoomType);
    }
  }

  uploadFile(event: any): void {
    const file: File | null = event.target.files.item(0);
    if (!file) {
     return;
    }

    this.uploadService.upload(file).subscribe(
      (httpEvent: any) => {
        if (httpEvent.type === HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total));
        } else if (httpEvent instanceof HttpResponse) {
          this.roomTypeForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }


  createRoomTypeForm(roomType: RoomType): FormGroup {
    return new FormGroup({
      id: new FormControl(roomType.id),
      name: new FormControl(roomType.name, Validators.required),
      photo: new FormControl(roomType.photo, [Validators.required]),
    });
  }

  onSubmit(): void {
    debugger
    this.roomTypeService.save(this.roomTypeForm.value)
      .subscribe(response => {
        return this.router.navigate(['/roomTypes']);
      });
  }
}
