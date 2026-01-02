import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTodo } from './simple-todo';

describe('SimpleTodo', () => {
  let component: SimpleTodo;
  let fixture: ComponentFixture<SimpleTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
