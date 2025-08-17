import { Component, inject, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TopStudiosWithWinnersService } from './data-access/top-studios-with-winners.service';
import { finalize } from 'rxjs';
import { TopStudiosWithWinnersResponse } from './models/top-studios-with-winners-response';

@Component({
  selector: 'app-top-studios-with-winners',
  imports: [
    NzTableModule
  ],
  templateUrl: './top-studios-with-winners.html',
  styleUrl: './top-studios-with-winners.scss'
})
export class TopStudiosWithWinners implements OnInit {

  private readonly service = inject(TopStudiosWithWinnersService)

  listOfData: TopStudiosWithWinnersResponse = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.service.get()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: response => this.setData(this.getTop3Winners(response))
      })
  }

  private setData(response: TopStudiosWithWinnersResponse) {
    this.listOfData = response;
  }

  private getTop3Winners(response: TopStudiosWithWinnersResponse): TopStudiosWithWinnersResponse {
    const data = response.sort((a, b) => a.winCount < b.winCount ? 1 : -1);
    const result: TopStudiosWithWinnersResponse = [];
        
    for (let i = 0; i < 3; i++) {
      result.push(data[i]);
    }

    return result;
  }
}
