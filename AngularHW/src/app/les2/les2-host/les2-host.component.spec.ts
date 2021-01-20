import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les2HostComponent } from './les2-host.component';

describe('Les2HostComponent', () => {
  let component: Les2HostComponent;
  let fixture: ComponentFixture<Les2HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Les2HostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Les2HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
