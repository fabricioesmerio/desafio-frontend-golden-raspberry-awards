import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WinnersByYearResponse } from "../models/winners-by-year-response";
import { environment } from "../../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ListMovieWinnersByYearsService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    get(year: number): Observable<WinnersByYearResponse> {
        return this.httpClient.get<WinnersByYearResponse>(`${this.apiUrl}/winnersByYear?year=${year}`);
    }
}