import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmanaqueComponent } from './almanaque.component';

describe('AlmanaqueComponent', () => {
  let component: AlmanaqueComponent;
  let fixture: ComponentFixture<AlmanaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmanaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmanaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
