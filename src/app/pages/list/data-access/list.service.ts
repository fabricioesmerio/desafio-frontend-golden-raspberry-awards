import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { MovieListResponse } from "../models/movie-list-response";
import { Observable } from "rxjs";
import { MovieListRequest } from "../models/movie-list-request";

@Injectable({ providedIn: 'root' })
export class ListService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    get(params: MovieListRequest): Observable<MovieListResponse> {
        let url = this.apiUrl;
        url += `?page=${params.page ? params.page : 0}`;

        if (params.winner !== undefined)
            url += `&winner=${params.winner}`;

        if (params.year !== undefined)
            url += `&year=${params.year}`;

        url += "&size=15";

        return this.httpClient.get<MovieListResponse>(url);
    }

}