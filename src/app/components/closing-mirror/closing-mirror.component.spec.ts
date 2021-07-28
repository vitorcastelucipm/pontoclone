import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingMirrorComponent } from './closing-mirror.component';

describe('ClosingMirrorComponent', () => {
  let component: ClosingMirrorComponent;
  let fixture: ComponentFixture<ClosingMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
