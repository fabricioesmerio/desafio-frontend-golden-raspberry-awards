import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudiosWithWinners } from './top-studios-with-winners';
import { TopStudiosWithWinnersService } from './data-access/top-studios-with-winners.service';
import { TopStudiosWithWinnersResponse } from './models/top-studios-with-winners-response';
import { NzTableModule } from 'ng-zorro-antd/table';
import { of } from 'rxjs';

describe(TopStudiosWithWinners.name, () => {
  let component: TopStudiosWithWinners;
  let fixture: ComponentFixture<TopStudiosWithWinners>;
  let service: jasmine.SpyObj<TopStudiosWithWinnersService>;

  const mockResponse: TopStudiosWithWinnersResponse = [];

  beforeEach(async () => {

    service = jasmine.createSpyObj('TopStudiosWithWinnersService', ['get']);
    service.get.and.returnValue(of(mockResponse));


    await TestBed.configureTestingModule({
      imports: [TopStudiosWithWinners, NzTableModule],
      providers: [
        { provide: TopStudiosWithWinnersService, useValue: service }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopStudiosWithWinners);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly populate the array listOfData', () => {
    const mock: TopStudiosWithWinnersResponse = [
      { name: 'Studio 1', winCount: 10 },
      { name: 'Studio 2', winCount: 1 },
      { name: 'Studio 3', winCount: 3 },
      { name: 'Studio 4', winCount: 1 },
      { name: 'Studio 5', winCount: 8 },
      { name: 'Studio 6', winCount: 4 },
      { name: 'Studio 7', winCount: 6 },
      { name: 'Studio 8', winCount: 5 },
      { name: 'Studio 9', winCount: 3 },
      { name: 'Studio 10', winCount: 5 }
    ]

    service.get.and.returnValue(of(mock));

    fixture.detectChanges();

    expect(component.listOfData.length).toBe(3);
    expect(component.listOfData[0].winCount).toBe(10);
    expect(component.listOfData[1].winCount).toBe(8);
    expect(component.listOfData[2].winCount).toBe(6);
  })
});
