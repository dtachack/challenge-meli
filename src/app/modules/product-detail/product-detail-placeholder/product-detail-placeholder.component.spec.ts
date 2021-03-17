import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPlaceholderComponent } from './product-detail-placeholder.component';

describe('ProductDetailPlaceholderComponent', () => {
  let component: ProductDetailPlaceholderComponent;
  let fixture: ComponentFixture<ProductDetailPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
