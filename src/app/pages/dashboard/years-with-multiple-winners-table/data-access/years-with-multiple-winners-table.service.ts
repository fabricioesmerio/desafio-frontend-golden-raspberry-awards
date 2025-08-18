import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { YearsWithMultipleWinnersResponse } from "../models/years-with-multiple-winners-response";
import { environment } from "../../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class YearsWithMultipleWinnersTableService {

    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    get(): Observable<YearsWithMultipleWinnersResponse> {
        return this.httpClient
            .get<{years: YearsWithMultipleWinnersResponse}>(`${this.apiUrl}/yearsWithMultipleWinners`)
            .pipe(
                map(data => data.years)
            );
    }
}