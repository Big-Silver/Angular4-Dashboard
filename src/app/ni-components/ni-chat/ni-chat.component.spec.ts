import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiChatComponent } from './ni-chat.component';

describe('NiChatComponent', () => {
  let component: NiChatComponent;
  let fixture: ComponentFixture<NiChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
