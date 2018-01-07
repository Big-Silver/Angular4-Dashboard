import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiBadgeComponent } from './ni-badge.component';

describe('NiBadgeComponent', () => {
  let component: NiBadgeComponent;
  let fixture: ComponentFixture<NiBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
