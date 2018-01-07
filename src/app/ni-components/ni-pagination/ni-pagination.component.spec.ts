import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiPaginationComponent } from './ni-pagination.component';

describe('NiPaginationComponent', () => {
  let component: NiPaginationComponent;
  let fixture: ComponentFixture<NiPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
