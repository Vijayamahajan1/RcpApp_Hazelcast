import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrl = 'http://rcp-app:8081/api/rcp';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/device/get-all`);
  }

    getDeviceById(id: number): Observable<Device> {
      return this.http.get<Device>(`${this.baseUrl}/device/get/${id}`);
    }

  addDevice(device: Device): Observable<Device> {
    const uniqueId = Math.floor(Math.random() * 100);  
    device.cacheId = uniqueId;
    return this.http.post<Device>(`${this.baseUrl}/device/create`, device);
  }

  updateDevice( device: Device): Observable<Device> {
    return this.http.post<Device>(`${this.baseUrl}/device/create`, device);
  }  

  deleteDevice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/device/delete/${id}`);
  }

}
