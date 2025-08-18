import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { YearsWithMultipleWinnersTable } from './years-with-multiple-winners-table/years-with-multiple-winners-table';
import { TopStudiosWithWinners } from './top-studios-with-winners/top-studios-with-winners';
import { ProducersWithLongestShortestInterval } from './producers-with-longest-shortest-interval/producers-with-longest-shortest-interval';
import { ListMovieWinnersByYear } from './list-movie-winners-by-year/list-movie-winners-by-year';

@Component({
  selector: 'app-dashboard',
  imports: [
    NzGridModule,
    NzDividerModule,
    YearsWithMultipleWinnersTable,
    TopStudiosWithWinners,
    ProducersWithLongestShortestInterval,
    ListMovieWinnersByYear
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
