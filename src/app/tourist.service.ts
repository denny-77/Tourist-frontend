import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private baseURL = "http://localhost:8080/api/tourist/tourists";
  constructor(private httpClient: HttpClient) { }

  getTouristsList(): Observable<Tourist[]> {
    return this.httpClient.get<Tourist[]>(`${this.baseURL}`);
  }

  createTourist(tourist: Tourist): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, tourist);
  }
}
