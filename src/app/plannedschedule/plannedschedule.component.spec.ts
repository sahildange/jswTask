import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedscheduleComponent } from './plannedschedule.component';

describe('PlannedscheduleComponent', () => {
  let component: PlannedscheduleComponent;
  let fixture: ComponentFixture<PlannedscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedscheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
