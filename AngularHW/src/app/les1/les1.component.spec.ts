import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les1Component } from './les1.component';

describe('Les1Component', () => {
  let component: Les1Component;
  let fixture: ComponentFixture<Les1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Les1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Les1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
