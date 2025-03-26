import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
  {
    path: '**',
    loadComponent: () =>
      import('./pages/error/error.component').then((m) => m.ErrorComponent),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
