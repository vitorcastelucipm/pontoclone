import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRegisterComponent } from './last-register.component';

describe('LastRegisterComponent', () => {
  let component: LastRegisterComponent;
  let fixture: ComponentFixture<LastRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
