import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignIn1Component } from './sign-in-1.component';

describe('PageSignIn1Component', () => {
  let component: PageSignIn1Component;
  let fixture: ComponentFixture<PageSignIn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignIn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignIn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
