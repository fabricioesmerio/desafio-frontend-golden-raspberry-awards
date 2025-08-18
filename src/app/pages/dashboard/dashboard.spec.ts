import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ListMovieWinnersByYear } from './list-movie-winners-by-year/list-movie-winners-by-year';
import { ProducersWithLongestShortestInterval } from './producers-with-longest-shortest-interval/producers-with-longest-shortest-interval';
import { TopStudiosWithWinners } from './top-studios-with-winners/top-studios-with-winners';
import { YearsWithMultipleWinnersTable } from './years-with-multiple-winners-table/years-with-multiple-winners-table';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(Dashboard.name, () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Dashboard,
        NzGridModule,
        NzDividerModule,
        YearsWithMultipleWinnersTable,
        TopStudiosWithWinners,
        ProducersWithLongestShortestInterval,
        ListMovieWinnersByYear,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
