import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcquirerService } from 'src/app/service/acquire.service';

@Component({
  selector: 'app-add-edit-acquirer',
  templateUrl: './add-edit-acquirer.component.html',
  styleUrls: ['./add-edit-acquirer.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule]
  
})
export class AddEditAcquirerComponent {
  acquirerForm: any = {
    name: '',
    code: '',
    country: '',
    currency: '',
  };

  acquirerId: number | null = null;

  constructor(
    private acquirerService: AcquirerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  countryList: string[] = ['USA', 'Canada', 'UK', 'Australia', 'India', 'Germany', 'France'];


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.acquirerId = +params['id'];
        this.getAcquirerById(this.acquirerId);
      }
    });
  }

  getAcquirerById(id: number) {
    this.acquirerService.getAcquirerById(id).subscribe((data) => {
      this.acquirerForm = data;
    });
  }

  saveAcquirer() {
      this.acquirerService.addAcquirer(this.acquirerForm).subscribe(() => {
        this.router.navigate(['/main/acquire']);
      });
  }

  cancel() {
    this.router.navigate(['/main/acquire']);
  }
}
