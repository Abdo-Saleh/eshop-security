import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMethodsSetComponent } from './delivery-methods-set.component';

describe('DeliveryMethodsSetComponent', () => {
  let component: DeliveryMethodsSetComponent;
  let fixture: ComponentFixture<DeliveryMethodsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryMethodsSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMethodsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
