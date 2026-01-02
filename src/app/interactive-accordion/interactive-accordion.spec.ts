import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveAccordion } from './interactive-accordion';

describe('InteractiveAccordion', () => {
  let component: InteractiveAccordion;
  let fixture: ComponentFixture<InteractiveAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
