import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaxMinWinIntervalForProducersResponse } from "../models/max-min-win-interval-producers-response";
import { environment } from "../../../../../environments/environment";


@Injectable({ providedIn: 'root' })
export class ProducersWithLongestShortestIntervalService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    get(): Observable<MaxMinWinIntervalForProducersResponse> {
        return this.httpClient.get<MaxMinWinIntervalForProducersResponse>(`${this.apiUrl}/maxMinWinIntervalForProducers`);
    }
}