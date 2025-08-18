import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieWinnersByYear } from './list-movie-winners-by-year';
import { HttpClient } from '@angular/common/http';
import { ListMovieWinnersByYearsService } from './data-access/list-movie-winners-by-year.service';
import { WinnersByYearResponse } from './models/winners-by-year-response';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe(ListMovieWinnersByYear.name, () => {
  let component: ListMovieWinnersByYear;
  let fixture: ComponentFixture<ListMovieWinnersByYear>;
  let service: jasmine.SpyObj<ListMovieWinnersByYearsService>;

  const mockResponse: WinnersByYearResponse = [
    { producers: ['Example 1'], year: 2020, id: 1, title: 'Title 1', studios: [''], winner: true },
    { producers: ['Example 2'], year: 2021, id: 2, title: 'Title 2', studios: [''], winner: true }
  ];

  beforeEach(async () => {

    service = jasmine.createSpyObj('ListMovieWinnersByYearsService', ['get']);
    service.get.and.returnValue(of(mockResponse));

    await TestBed.configureTestingModule({
      imports: [ListMovieWinnersByYear, FormsModule],
      providers: [
        { provide: ListMovieWinnersByYearsService, useValue: service }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListMovieWinnersByYear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ListMovieWinnersByYear.prototype.setData.name}: should set data correctly using setDate()`, () => {
    component.setData(mockResponse);

    expect(component.listOfData).toEqual(mockResponse);
  })

  it('should fetch winners by year and set loading states', (done) => {
    component.year = 2020;

    expect(component.loading).toBeFalse();

    component.fetchWinnersByYear();

    setTimeout(() => {
      expect(service.get).toHaveBeenCalledWith(2020);
      expect(component.listOfData).toEqual(mockResponse);
      expect(component.loading).toBeFalse();
      done();
    }, 0);
  })

  it('should bind input to year property', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    input.value = '2022';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.year).toBe(2022);
  })

  it(`${ListMovieWinnersByYear.prototype.fetchWinnersByYear.name}: should call fetchWinnersByYear when button is clicked`, () => {
    spyOn(component, 'fetchWinnersByYear');

    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();

    expect(component.fetchWinnersByYear).toHaveBeenCalled();
  })
});
