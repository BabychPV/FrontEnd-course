import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les2Component } from './les2.component';

describe('Les2Component', () => {
  let component: Les2Component;
  let fixture: ComponentFixture<Les2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Les2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Les2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
