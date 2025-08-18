import { Component, inject, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProducersWithLongestShortestIntervalService } from './data-access/producers-with-longest-shortest-interval.service';
import { MaxMinWinIntervalForProducersItem, MaxMinWinIntervalForProducersResponse } from './models/max-min-win-interval-producers-response';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-producers-with-longest-shortest-interval',
  imports: [
    NzTableModule
  ],
  templateUrl: './producers-with-longest-shortest-interval.html',
  styleUrl: './producers-with-longest-shortest-interval.scss'
})
export class ProducersWithLongestShortestInterval implements OnInit {
  private readonly service = inject(ProducersWithLongestShortestIntervalService);

  listOfMax: Array<MaxMinWinIntervalForProducersItem> = []
  listOfMin: Array<MaxMinWinIntervalForProducersItem> = []
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.service.get()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: response => this.setData(response)
      });
  }

  setData(response: MaxMinWinIntervalForProducersResponse) {
    this.listOfMax = response.max;
    this.listOfMin = response.min;
  }
}
