import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavbarComponent } from './horizontal-navbar.component';

describe('HorizontalNavbarComponent', () => {
  let component: HorizontalNavbarComponent;
  let fixture: ComponentFixture<HorizontalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
