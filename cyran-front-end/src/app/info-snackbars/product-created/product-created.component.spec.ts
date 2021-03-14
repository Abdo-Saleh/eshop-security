import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreatedComponent } from './product-created.component';

describe('ProductCreatedComponent', () => {
  let component: ProductCreatedComponent;
  let fixture: ComponentFixture<ProductCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
