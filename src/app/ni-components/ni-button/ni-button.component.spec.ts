import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiButtonComponent } from './ni-button.component';

describe('NiButtonComponent', () => {
  let component: NiButtonComponent;
  let fixture: ComponentFixture<NiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
