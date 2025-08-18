import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListMovieWinnersByYearsService } from './data-access/list-movie-winners-by-year.service';
import { WinnersByYearResponse } from './models/winners-by-year-response';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-list-movie-winners-by-year',
  imports: [
    NzInputModule,
    NzTableModule,
    FormsModule,
    NzButtonModule,
    NzIconModule
  ],
  templateUrl: './list-movie-winners-by-year.html',
  styleUrl: './list-movie-winners-by-year.scss'
})
export class ListMovieWinnersByYear {

  private readonly service = inject(ListMovieWinnersByYearsService);

  year!: number;
  listOfData: WinnersByYearResponse = [];
  loading: boolean = false;

  setData(response: WinnersByYearResponse) {
    this.listOfData = response
  }

  fetchWinnersByYear() {
    this.loading = true;
    this.service.get(this.year)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: response => this.setData(response)
      });
  }

}
