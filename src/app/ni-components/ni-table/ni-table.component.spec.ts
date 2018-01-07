import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiTableComponent } from './ni-table.component';

describe('NiCardComponent', () => {
  let component: NiTableComponent;
  let fixture: ComponentFixture<NiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
