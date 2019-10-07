import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeDatosComponent } from './banco-de-datos.component';

describe('BancoDeDatosComponent', () => {
  let component: BancoDeDatosComponent;
  let fixture: ComponentFixture<BancoDeDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoDeDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
