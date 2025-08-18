import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWithLongestShortestInterval } from './producers-with-longest-shortest-interval';
import { ProducersWithLongestShortestIntervalService } from './data-access/producers-with-longest-shortest-interval.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MaxMinWinIntervalForProducersResponse } from './models/max-min-win-interval-producers-response';
import { of } from 'rxjs';

fdescribe(ProducersWithLongestShortestInterval.name, () => {
  let component: ProducersWithLongestShortestInterval;
  let fixture: ComponentFixture<ProducersWithLongestShortestInterval>;
  let service: jasmine.SpyObj<ProducersWithLongestShortestIntervalService>;

  const mockResponse: MaxMinWinIntervalForProducersResponse = {
    max: [
      {
        followingWin: 2010, interval: 10, previousWin: 2000, producer: 'Producer 1'
      }
    ],
    min: [
      {
        followingWin: 1996, interval: 1, previousWin: 1995, producer: 'Producer 2'
      }
    ]
  };

  beforeEach(async () => {

    service = jasmine.createSpyObj('ProducersWithLongestShortestIntervalService', ['get']);
    service.get.and.returnValue(of(mockResponse));


    await TestBed.configureTestingModule({
      imports: [ProducersWithLongestShortestInterval, NzTableModule],
      providers: [
        { provide: ProducersWithLongestShortestIntervalService, useValue: service }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProducersWithLongestShortestInterval);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ProducersWithLongestShortestInterval.prototype.setData.name}: should be invoked once during component initialization`, () => {
    spyOn(component, 'setData');
    fixture.detectChanges();

    expect(component.setData).toHaveBeenCalled();
    expect(component.setData).toHaveBeenCalledTimes(1);
  })

  it('should correctly populate the arrays listOfMax and listOfMin', () => {
    fixture.detectChanges();

    const minInterval = component.listOfMin.map(item => item.interval)[0];
    const maxInterval = component.listOfMax.map(item => item.interval)[0];
    const minIntervalMock = mockResponse.min.map(item => item.interval)[0];
    const maxIntervalMock = mockResponse.max.map(item => item.interval)[0];

    expect(component.loading).toBeFalse();
    expect(component.listOfMin).toBeTruthy();
    expect(component.listOfMax).toBeTruthy();
    expect(minInterval).toBe(minIntervalMock);
    expect(maxInterval).toBe(maxIntervalMock);
  })
});
