import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSendToEmailComponent } from './password-send-to-email.component';

describe('PasswordSendToEmailComponent', () => {
  let component: PasswordSendToEmailComponent;
  let fixture: ComponentFixture<PasswordSendToEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSendToEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSendToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
