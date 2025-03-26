import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acquirer } from '../models/acquirer.model';

@Injectable({
  providedIn: 'root',
})
export class AcquirerService {
  private baseUrl = 'http://rcp-app:8081/api/rcp';

  constructor(private http: HttpClient) {}

  getAcquirers(): Observable<Acquirer[]> {
    return this.http.get<Acquirer[]>(`${this.baseUrl}/acquirer/getAll`);
  }

  getAcquirerById(id: number): Observable<Acquirer> {
    return this.http.get<Acquirer>(`${this.baseUrl}/${id}`);
  }

  addAcquirer(acquirer: Acquirer): Observable<Acquirer> {
    const uniqueId = Math.floor(Math.random() * 100);  
    acquirer.cacheId = uniqueId;
    return this.http.post<Acquirer>(`${this.baseUrl}/acquirer/create`, acquirer);
  }

  updateAcquirer(acquirer: Acquirer): Observable<Acquirer> {
    return this.http.post<Acquirer>(`${this.baseUrl}/acquirer/create`, acquirer);
  }

  deleteAcquirer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/acquirer/Delete/${id}`);
  }
}
