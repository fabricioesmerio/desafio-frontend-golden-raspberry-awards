export interface MaxMinWinIntervalForProducersItem {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface MaxMinWinIntervalForProducersResponse {
    min: Array<MaxMinWinIntervalForProducersItem>,
    max: Array<MaxMinWinIntervalForProducersItem>
}