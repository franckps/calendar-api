export interface UpdateCalendarProtocol {
    title: string;
    description: string;
}

export interface CreateCalendarProtocol extends UpdateCalendarProtocol {
    date: string;
    start_time: number;
    end_time: number;
}

export interface CalendarProtocol extends CreateCalendarProtocol {
    id: string;
    created_at: string;
    active: boolean;
}

export interface FindCalendarProtocol {
    startDate: string;
    endDate: string;
}