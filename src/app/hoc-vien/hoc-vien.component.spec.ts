import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocVienComponent } from './hoc-vien.component';

describe('HocVienComponent', () => {
  let component: HocVienComponent;
  let fixture: ComponentFixture<HocVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
