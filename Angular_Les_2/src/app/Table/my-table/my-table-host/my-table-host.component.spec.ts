import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyTableHostComponent} from './my-table-host.component';

describe('MyTableHostComponent', () => {
  let component: MyTableHostComponent;
  let fixture: ComponentFixture<MyTableHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTableHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
