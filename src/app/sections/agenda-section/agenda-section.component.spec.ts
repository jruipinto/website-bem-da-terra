import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaSectionComponent } from './agenda-section.component';

describe('AgendaSectionComponent', () => {
  let component: AgendaSectionComponent;
  let fixture: ComponentFixture<AgendaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
