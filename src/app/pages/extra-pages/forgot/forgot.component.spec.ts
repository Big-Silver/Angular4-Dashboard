import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForgotComponent } from './forgot.component';

describe('PageForgotComponent', () => {
  let component: PageForgotComponent;
  let fixture: ComponentFixture<PageForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
