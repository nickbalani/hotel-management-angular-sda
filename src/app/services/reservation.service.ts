import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Room} from './room.service';
import {Client, SaveClientRequest} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/reservations';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveReservationRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface Reservation {
  id: number;
  checkIn: Date;
  checkOut: Date;
  room: Room;
  client: Client;
  createdAt: Date;
}

export interface SaveReservationRequest {
  id: number;
  checkIn: Date;
  checkOut: Date;
  roomId: number;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
}

