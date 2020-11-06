import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressIconComponent } from './address-icon.component';

describe('AddressIconComponent', () => {
  let component: AddressIconComponent;
  let fixture: ComponentFixture<AddressIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
