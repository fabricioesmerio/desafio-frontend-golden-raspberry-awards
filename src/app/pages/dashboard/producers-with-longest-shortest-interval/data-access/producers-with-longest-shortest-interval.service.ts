import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaxMinWinIntervalForProducersResponse } from "../models/max-min-win-interval-producers-response";



@Injectable({ providedIn: 'root' })
export class ProducersWithLongestShortestIntervalService {
    private readonly httpClient = inject(HttpClient);

    get(): Observable<MaxMinWinIntervalForProducersResponse> {
        return this.httpClient.get<MaxMinWinIntervalForProducersResponse>(`https://challenge.outsera.tech/api/movies/maxMinWinIntervalForProducers`);
    }
}