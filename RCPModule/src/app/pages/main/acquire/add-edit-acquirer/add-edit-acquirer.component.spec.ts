import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAcquirerComponent } from './add-edit-acquirer.component';

describe('AddEditAcquirerComponent', () => {
  let component: AddEditAcquirerComponent;
  let fixture: ComponentFixture<AddEditAcquirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAcquirerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAcquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
