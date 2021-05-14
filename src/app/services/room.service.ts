import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RoomType} from './roomType.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:8080/api/rooms';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveRoomRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface Room {
  id: number;
  name: string;
  createdAt: Date;
  type: RoomType;
}

export interface SaveRoomRequest {
  id: number;
  name: string;
  roomTypeId: number;
}
