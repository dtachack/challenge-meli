import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProductPlaceholderComponent } from './result-product-placeholder.component';

describe('ResultProductPlaceholderComponent', () => {
  let component: ResultProductPlaceholderComponent;
  let fixture: ComponentFixture<ResultProductPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultProductPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultProductPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
