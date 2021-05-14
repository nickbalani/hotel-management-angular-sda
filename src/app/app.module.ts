import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { ClientManageComponent } from './clients/client-manage/client-manage.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ReservationTableComponent } from './reservations/reservation-table/reservation-table.component';
import { RoomsTableComponent } from './rooms/rooms-table/rooms-table.component';
import { RoomTypesTableComponent } from './roomTypes/room-types-table/room-types-table.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';
import { RoomsFormComponent } from './rooms/rooms-form/rooms-form.component';
import { RoomTypeManageComponent } from './roomTypes/room-type-manage/room-type-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTableComponent,
    ClientManageComponent,
    ReservationTableComponent,
    RoomsTableComponent,
    RoomTypesTableComponent,
    ReservationFormComponent,
    RoomsFormComponent,
    RoomTypeManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
