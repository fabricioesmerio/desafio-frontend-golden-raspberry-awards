import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { YearsWithMultipleWinnersResponse } from "../models/years-with-multiple-winners-response";

@Injectable({ providedIn: 'root' })
export class YearsWithMultipleWinnersTableService {

    private readonly httpClient = inject(HttpClient);

    get(): Observable<YearsWithMultipleWinnersResponse> {
        return this.httpClient
            .get<{years: YearsWithMultipleWinnersResponse}>(`https://challenge.outsera.tech/api/movies/yearsWithMultipleWinners`)
            .pipe(
                map(data => data.years)
            );
    }
}