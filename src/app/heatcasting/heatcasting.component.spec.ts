import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatcastingComponent } from './heatcasting.component';

describe('HeatcastingComponent', () => {
  let component: HeatcastingComponent;
  let fixture: ComponentFixture<HeatcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
