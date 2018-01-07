import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmComponent } from './confirm.component';

describe('PageConfirmComponent', () => {
  let component: PageConfirmComponent;
  let fixture: ComponentFixture<PageConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
