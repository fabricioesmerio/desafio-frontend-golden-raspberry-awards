import { WinnersByYearResponse } from "../../dashboard/list-movie-winners-by-year/models/winners-by-year-response";


export interface MovieListResponse {
    content: WinnersByYearResponse,
    totalPages: number;
    totalElements: number;
    size: number;
}