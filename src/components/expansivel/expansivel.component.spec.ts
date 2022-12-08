import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansivelComponent } from './expansivel.component';

describe('ExpansivelComponent', () => {
  let component: ExpansivelComponent;
  let fixture: ComponentFixture<ExpansivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
