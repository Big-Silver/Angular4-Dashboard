import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiAlertComponent } from './ni-alert.component';

describe('NiAlertComponent', () => {
  let component: NiAlertComponent;
  let fixture: ComponentFixture<NiAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
