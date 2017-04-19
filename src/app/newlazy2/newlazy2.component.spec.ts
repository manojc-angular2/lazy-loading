import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newlazy2Component } from './newlazy2.component';

describe('Newlazy2Component', () => {
  let component: Newlazy2Component;
  let fixture: ComponentFixture<Newlazy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newlazy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newlazy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
