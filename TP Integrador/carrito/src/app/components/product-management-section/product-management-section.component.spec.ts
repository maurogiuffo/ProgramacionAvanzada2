import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementSectionComponent } from './product-management-section.component';

describe('ProductManagementSectionComponent', () => {
  let component: ProductManagementSectionComponent;
  let fixture: ComponentFixture<ProductManagementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductManagementSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
