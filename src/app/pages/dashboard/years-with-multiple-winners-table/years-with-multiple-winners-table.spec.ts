import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWithMultipleWinnersTable } from './years-with-multiple-winners-table';

describe('YearsWithMultipleWinnersTable', () => {
  let component: YearsWithMultipleWinnersTable;
  let fixture: ComponentFixture<YearsWithMultipleWinnersTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearsWithMultipleWinnersTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsWithMultipleWinnersTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
