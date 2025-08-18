import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { List } from './list';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './data-access/list.service';
import { of } from 'rxjs';
import { MovieListResponse } from './models/movie-list-response';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


const mockResponse: MovieListResponse = {
  content: [],
  totalElements: 1,
  totalPages: 1,
  size: 1
};

class ListServiceMock {
  get = jasmine.createSpy('get').and.returnValue(of(mockResponse));
}


describe(List.name, () => {
  let component: List;
  let fixture: ComponentFixture<List>;
  let service: ListServiceMock;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        List,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ListService, useClass: ListServiceMock },
        provideNoopAnimations()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    service = TestBed.inject(ListService) as unknown as ListServiceMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchMovies on init', () => {
    spyOn(component, 'fetchMovies').and.callThrough();
    component.ngOnInit();
    expect(component.fetchMovies).toHaveBeenCalled();
  });

  it('should set listOfData when service returns data', () => {
    component.fetchMovies();
    expect(component.listOfData).toEqual(mockResponse);
    expect(service.get).toHaveBeenCalledWith({ page: 0 });
    expect(component.loading).toBeFalse();
  });

  it(`${List.prototype.pageIndexChange.name}: should update page index and fetch movies when pageIndexChange is called`, () => {
    spyOn(component, 'fetchMovies');
    component.pageIndexChange(3);
    expect(component.currentPageIndex).toBe(2);
    expect(component.fetchMovies).toHaveBeenCalled();
  });

  it(`${List.prototype.onChangeWinnerSelect.name}: should call fetchMovies when onChangeWinnerSelect is triggered`, () => {
    spyOn(component, 'fetchMovies');
    component.onChangeWinnerSelect();
    expect(component.fetchMovies).toHaveBeenCalled();
  });

  it(`${List.prototype.fetchMovies.name}: should call fetchMovies when year control changes to a valid value`, () => {
    spyOn(component, 'fetchMovies').and.callThrough();
    component.ngOnInit();
    component.year.setValue(1990);
    fixture.detectChanges();
    expect(component.fetchMovies).toHaveBeenCalled();
  });

  it(`${List.prototype.ngOnInit.name}: should call fetchMovies when a valid year is typed in the input`, fakeAsync(() => {
    spyOn(component, 'fetchMovies').and.callThrough();
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    input.value = '2018';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    tick(300);

    expect(component.fetchMovies).toHaveBeenCalledTimes(2);

  }));

  it('should call service.get with {page: 0, winner: false} when winner is set to "false"', () => {
    component.winner = 'false';
    component.fetchMovies();

    expect(service.get).toHaveBeenCalledWith({ page: 0, winner: false });
  });
});
