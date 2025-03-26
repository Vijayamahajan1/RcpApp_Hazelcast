import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass'],
  standalone: true,
})
export class ErrorComponent {

    constructor(
      private router: Router
    ) {}

  cancel() {
    this.router.navigate(['/main/acquire']);
  }
}
