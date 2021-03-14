import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedOutComponent } from './user-logged-out.component';

describe('UserLoggedOutComponent', () => {
  let component: UserLoggedOutComponent;
  let fixture: ComponentFixture<UserLoggedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoggedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
