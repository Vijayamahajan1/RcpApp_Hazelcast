import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddDeviceComponent {
  deviceForm: any = {
    terminalId: '',
    merchantId: '',
    deviceType: '',
    location: '',
  };

  deviceId: number | null = null;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.deviceId = +params['id'];  // Convert to number
        this.getDeviceById(this.deviceId);
      }
    });
  }

  getDeviceById(deviceId: number) {
    this.deviceService.getDeviceById(deviceId).subscribe((data) => {
      this.deviceForm = data;
    });
  }


  saveDevice(): void {
      this.deviceService.addDevice(this.deviceForm).subscribe(() => {
        this.router.navigate(['/main/device']);  
      });
  }

  cancel(): void {
    this.router.navigate(['/main/device']);  
  }
}
