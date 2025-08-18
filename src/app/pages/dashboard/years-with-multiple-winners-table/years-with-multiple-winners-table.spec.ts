import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWithMultipleWinnersTable } from './years-with-multiple-winners-table';
import { YearsWithMultipleWinnersTableService } from './data-access/years-with-multiple-winners-table.service';
import { of } from 'rxjs';
import { YearsWithMultipleWinnersResponse } from './models/years-with-multiple-winners-response';
import { NzTableModule } from 'ng-zorro-antd/table';

describe(YearsWithMultipleWinnersTable.name, () => {
  let component: YearsWithMultipleWinnersTable;
  let fixture: ComponentFixture<YearsWithMultipleWinnersTable>;
  let service: jasmine.SpyObj<YearsWithMultipleWinnersTableService>;

  const mockResponse: YearsWithMultipleWinnersResponse = [
    { winnerCount: 10, year: 1990 },
    { winnerCount: 8, year: 1996 },
    { winnerCount: 6, year: 2002 }
  ]

  beforeEach(async () => {

    service = jasmine.createSpyObj('YearsWithMultipleWinnersTableService', ['get']);
    service.get.and.returnValue(of(mockResponse));
    await TestBed.configureTestingModule({
      imports: [YearsWithMultipleWinnersTable, NzTableModule],
      providers: [
        { provide: YearsWithMultipleWinnersTableService, useValue: service }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(YearsWithMultipleWinnersTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly populate the array listOfData', () => {

    expect(component.listOfData.length).toBe(mockResponse.length);
    expect(component.listOfData[0].winnerCount).toBe(mockResponse[0].winnerCount);
    expect(component.listOfData[1].winnerCount).toBe(mockResponse[1].winnerCount);
    expect(component.listOfData[2].winnerCount).toBe(mockResponse[2].winnerCount);
  })
});
