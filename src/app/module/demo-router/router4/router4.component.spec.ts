import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router4Component } from './router4.component';

describe('Router4Component', () => {
  let component: Router4Component;
  let fixture: ComponentFixture<Router4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
