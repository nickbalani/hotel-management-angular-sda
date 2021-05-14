import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
