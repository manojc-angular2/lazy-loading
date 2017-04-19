import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newlazy1Component } from './newlazy1.component';

describe('Newlazy1Component', () => {
  let component: Newlazy1Component;
  let fixture: ComponentFixture<Newlazy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newlazy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newlazy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
