import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiFileComponent } from './ni-file.component';

describe('NiFileComponent', () => {
  let component: NiFileComponent;
  let fixture: ComponentFixture<NiFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
