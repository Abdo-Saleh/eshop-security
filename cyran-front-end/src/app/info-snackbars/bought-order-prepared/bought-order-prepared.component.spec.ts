import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtOrderPreparedComponent } from './bought-order-prepared.component';

describe('BoughtOrderPreparedComponent', () => {
  let component: BoughtOrderPreparedComponent;
  let fixture: ComponentFixture<BoughtOrderPreparedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtOrderPreparedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtOrderPreparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
