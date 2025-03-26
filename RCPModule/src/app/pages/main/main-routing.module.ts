import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      { 
        path: 'acquire', 
        loadComponent: () => import('./acquire/acquire.component').then(m => m.AcquireComponent)
      },
      { 
        path: 'device', 
        loadComponent: () => import('./device/device.component').then(m => m.DeviceComponent)
      },
      { 
        path: 'add-edit-acquirer', 
        loadComponent: () => import('./acquire/add-edit-acquirer/add-edit-acquirer.component').then(m => m.AddEditAcquirerComponent)
      },
      { 
        path: 'add-device', 
        loadComponent: () => import('./device/add-device/add-device.component').then(m => m.AddDeviceComponent)
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
