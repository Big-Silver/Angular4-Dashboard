import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiLoadingComponent } from './ni-loading.component';

describe('NiLoadingComponent', () => {
  let component: NiLoadingComponent;
  let fixture: ComponentFixture<NiLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
