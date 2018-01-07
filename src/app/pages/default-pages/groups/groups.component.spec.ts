import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboard2Component } from './dashboard-2.component';

describe('PageDashboard2Component', () => {
  let component: PageDashboard2Component;
  let fixture: ComponentFixture<PageDashboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDashboard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
