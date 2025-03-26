import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Acquirer } from 'src/app/models/acquirer.model';
import { AcquirerService } from 'src/app/service/acquire.service';

@Component({
  selector: 'app-acquirer',
  templateUrl: './acquire.component.html',
  styleUrls: ['./acquire.component.sass'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class AcquireComponent implements OnInit {
  acquirers: Acquirer[] = [];
  selectedAcquirerId: number | null = null;

  constructor(private acquirerService: AcquirerService, private router: Router) {}

  ngOnInit(): void {
    this.getAcquirers();
  }

  getAcquirers() {
    this.acquirerService.getAcquirers().subscribe((data: Acquirer[]) => {
      this.acquirers = data;
    });
  }

  openAddPage() {
    this.router.navigate(['/main/add-edit-acquirer']);
  }

  selectAcquirer(cacheId: number) {
    this.selectedAcquirerId = cacheId; 
    console.log('Selected ID:', cacheId, this.selectedAcquirerId);
  }
  
  updateAcquirer(acquirer: Acquirer) {
    console.log('Acquirer updated:', acquirer);
      this.selectedAcquirerId = 0;
  }
  
  cancelEdit() {
    this.selectedAcquirerId = 0;
  }

  deleteAcquirer(id: number) {
    if (confirm('Are you sure you want to delete this acquirer?')) {
      if (!id) {
        console.error('UUID is invalid or undefined:', id);
        return; 
      }
      console.log(id);
      this.acquirerService.deleteAcquirer(id).subscribe(() => {
        this.getAcquirers();
      });
    }
  }
}
