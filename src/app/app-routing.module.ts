import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientTableComponent} from './clients/client-table/client-table.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';
import {ReservationTableComponent} from './reservations/reservation-table/reservation-table.component';
import {RoomsTableComponent} from './rooms/rooms-table/rooms-table.component';
import {RoomTypesTableComponent} from './roomTypes/room-types-table/room-types-table.component';
import {ReservationFormComponent} from './reservations/reservation-form/reservation-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/reservations', pathMatch: 'full'},
  {path: 'reservations', component: ReservationTableComponent},
  {path: 'reservations/manage', component: ReservationFormComponent},
  {path: 'reservations/manage/:id', component: ReservationFormComponent},
  {path: 'rooms', component: RoomsTableComponent},
  {path: 'roomTypes', component: RoomTypesTableComponent},
  {path: 'clients', component: ClientTableComponent},
  {path: 'clients/manage', component: ClientManageComponent},
  {path: 'clients/manage/:id', component: ClientManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
