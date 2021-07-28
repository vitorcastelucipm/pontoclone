import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontualityComponent } from './pontuality.component';

describe('PontualityComponent', () => {
  let component: PontualityComponent;
  let fixture: ComponentFixture<PontualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
