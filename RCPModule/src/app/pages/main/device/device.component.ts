import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DeviceComponent {
  devices: Device[] = [];
  selectedDeviceId: number | null = null; 

  constructor(private deviceService: DeviceService,private router:Router) { }

  ngOnInit(): void {
    this.loadDevices(); 
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe((data: Device[]) => {
      this.devices = data;
    });
  }  

  openAddPage(): void {
    this.router.navigate(['/main/add-device']);
  }

  selectDevice(deviceId: number): void {
    this.selectedDeviceId = deviceId; 
  }

  cancelEdit(): void {
    this.selectedDeviceId = null; 
    this.loadDevices(); 
  }

  updateDevice(device: Device): void {
    this.deviceService.updateDevice(device).subscribe(() => {
      this.selectedDeviceId = null;  
    });
  }

  deleteDevice(id: number) {
    if (confirm('Are you sure you want to delete this device?')) {
      if (!id) {
        console.error('Id is invalid or undefined:', id);
        return; 
      }
      console.log(id);
      this.deviceService.deleteDevice(id).subscribe(() => {
        this.loadDevices;
      });
    }
  }
}
