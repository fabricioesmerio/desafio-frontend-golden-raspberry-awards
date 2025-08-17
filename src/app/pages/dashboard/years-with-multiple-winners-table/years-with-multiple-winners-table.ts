import { Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { YearsWithMultipleWinnersTableService } from './data-access/years-with-multiple-winners-table.service';
import { YearsWithMultipleWinnersModel, YearsWithMultipleWinnersResponse } from './models/years-with-multiple-winners-response';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-years-with-multiple-winners-table',
  imports: [
    NzTableModule
  ],
  templateUrl: './years-with-multiple-winners-table.html',
  styleUrl: './years-with-multiple-winners-table.scss'
})
export class YearsWithMultipleWinnersTable {

  private readonly service = inject(YearsWithMultipleWinnersTableService);

  listOfData: YearsWithMultipleWinnersResponse = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.service.get()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: response => this.setData(response)
      });
  }

  private setData(data: YearsWithMultipleWinnersResponse) {
    this.listOfData = data;
  }
}
