import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUsComponent } from './about-us.component';

describe('PageAboutUsComponent', () => {
  let component: PageAboutUsComponent;
  let fixture: ComponentFixture<PageAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
