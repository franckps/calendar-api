export interface CreateCalendarProtocol {
    title: string;
    description: string;
    date: string;
    start_time: number;
    end_time: number;
}

export interface CalendarProtocol extends CreateCalendarProtocol {
    id: string;
    created_at: string;
    active: boolean;
}