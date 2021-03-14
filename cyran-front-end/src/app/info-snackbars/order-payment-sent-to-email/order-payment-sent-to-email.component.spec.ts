import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaymentSentToEmailComponent } from './order-payment-sent-to-email.component';

describe('OrderPaymentSentToEmailComponent', () => {
  let component: OrderPaymentSentToEmailComponent;
  let fixture: ComponentFixture<OrderPaymentSentToEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPaymentSentToEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPaymentSentToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
