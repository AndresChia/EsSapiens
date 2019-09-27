import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCardsComponent } from './column-cards.component';

describe('ColumnCardsComponent', () => {
  let component: ColumnCardsComponent;
  let fixture: ComponentFixture<ColumnCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
