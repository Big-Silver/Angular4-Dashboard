import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiCardComponent } from './ni-card.component';

describe('NiCardComponent', () => {
  let component: NiCardComponent;
  let fixture: ComponentFixture<NiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
