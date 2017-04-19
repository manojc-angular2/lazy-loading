import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlazyComponent } from './newlazy.component';

describe('NewlazyComponent', () => {
  let component: NewlazyComponent;
  let fixture: ComponentFixture<NewlazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
