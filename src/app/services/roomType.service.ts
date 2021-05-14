import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SaveRoomRequest} from './room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  private baseUrl = 'http://localhost:8080/api/roomTypes';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<RoomType> {
    return this.http.get<RoomType>(`${this.baseUrl}/${id}`);
  }

  save(request: SaveRoomType): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface RoomType {
  id: number;
  name: string;
  photo: string;
  createdAt: Date;
}

export interface SaveRoomType {
  id: number;
  name: string;
  photo: string;
}
