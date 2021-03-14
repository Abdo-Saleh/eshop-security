import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToChartComponent } from './added-to-chart.component';

describe('AddedToChartComponent', () => {
  let component: AddedToChartComponent;
  let fixture: ComponentFixture<AddedToChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedToChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedToChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
