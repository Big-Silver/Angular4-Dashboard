import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutsComponent } from './layouts.component';

describe('PageLayoutsComponent', () => {
  let component: PageLayoutsComponent;
  let fixture: ComponentFixture<PageLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
