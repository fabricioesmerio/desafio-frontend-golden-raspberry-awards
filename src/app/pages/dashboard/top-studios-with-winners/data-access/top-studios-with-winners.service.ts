import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TopStudiosWithWinnersResponse } from "../models/top-studios-with-winners-response";

@Injectable({ providedIn: 'root' })
export class TopStudiosWithWinnersService {

    private readonly httpClient = inject(HttpClient);

    get(): Observable<TopStudiosWithWinnersResponse> {
        return this.httpClient.get<{ studios: TopStudiosWithWinnersResponse }>('https://challenge.outsera.tech/api/movies/studiosWithWinCount')
            .pipe(
                map(data => data.studios)
            );
    }

}