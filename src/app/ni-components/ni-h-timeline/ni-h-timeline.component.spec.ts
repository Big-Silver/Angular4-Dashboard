import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiHTimelineComponent } from './ni-h-timeline.component';

describe('NiHTimelineComponent', () => {
  let component: NiHTimelineComponent;
  let fixture: ComponentFixture<NiHTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiHTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiHTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
