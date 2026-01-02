import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFilterList } from './dynamic-filter-list';

describe('DynamicFilterList', () => {
  let component: DynamicFilterList;
  let fixture: ComponentFixture<DynamicFilterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFilterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFilterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
