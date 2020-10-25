import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPublicDashboardComponent } from './main-public-dashboard.component';

describe('MainPublicDashboardComponent', () => {
  let component: MainPublicDashboardComponent;
  let fixture: ComponentFixture<MainPublicDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPublicDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPublicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
