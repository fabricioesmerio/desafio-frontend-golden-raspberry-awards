import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TopStudiosWithWinnersResponse } from "../models/top-studios-with-winners-response";
import { environment } from "../../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class TopStudiosWithWinnersService {

    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    get(): Observable<TopStudiosWithWinnersResponse> {
        return this.httpClient.get<{ studios: TopStudiosWithWinnersResponse }>(`${this.apiUrl}/studiosWithWinCount`)
            .pipe(
                map(data => data.studios)
            );
    }

}