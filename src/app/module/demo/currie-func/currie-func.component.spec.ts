import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrieFuncComponent } from './currie-func.component';

describe('CurrieFuncComponent', () => {
  let component: CurrieFuncComponent;
  let fixture: ComponentFixture<CurrieFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrieFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrieFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
