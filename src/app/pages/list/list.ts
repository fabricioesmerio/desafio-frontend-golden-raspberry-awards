import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListService } from './data-access/list.service';
import { MovieListResponse } from './models/movie-list-response';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs';
import { MovieListRequest } from './models/movie-list-request';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  imports: [
    NzGridModule,
    NzTableModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List implements OnInit {

  private readonly service = inject(ListService);
  private destroyRef = inject(DestroyRef);

  listOfData: MovieListResponse = { content: [], totalElements: 0, totalPages: 0, size: 0 };
  loading: boolean = false;
  year = new FormControl<number | null>(null, [Validators.min(1980), Validators.max(new Date().getFullYear())]);
  winner: string = '';
  currentPageIndex: number = 0;

  ngOnInit(): void {
    this.year.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe(_ => {
        if (this.year.valid) {
          this.currentPageIndex = 0;
          this.fetchMovies();
        }
      })
    this.fetchMovies();
  }

  fetchMovies() {
    this.loading = true;
    let params: MovieListRequest = { page: this.currentPageIndex };

    if (this.winner != null && this.winner !== "")
      params.winner = JSON.parse(this.winner);

    if (this.year.value)
      params.year = this.year.value;

    this.service.get(params)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: response => this.setData(response)
      })
  }

  private setData(data: MovieListResponse) {
    this.listOfData = data;
  }

  pageIndexChange(event: number) {
    this.currentPageIndex = event - 1;
    this.fetchMovies();
  }

  onChangeWinnerSelect() {
    this.currentPageIndex = 0;
    this.fetchMovies();
  }

}
