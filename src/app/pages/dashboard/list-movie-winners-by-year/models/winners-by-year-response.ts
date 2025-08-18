export interface WinnersByYear {
    id: number;
    year: number;
    title: string;
    studios: Array<string>
    producers: Array<string>
    winner: boolean;
}

export type WinnersByYearResponse = Array<WinnersByYear>