import { Dayjs } from "dayjs";

export interface CityInfo {
    label: string,
    country: string,
    lat: number,
    lng: number
}

export interface User {
    id: number;
    name: string;
    surname: string;
    rate: number;
    bio: string;
}

export interface TripSearchParams {
    from: string,
    to: string,
    date: string,
    seats: number
}

export interface TripInfo {
    id: number,
    user: User,
    from: CityInfo,
    fromLocation: string
    to: CityInfo,
    toLocation: string
    availableSeats: number
    date: Dayjs
    duration: number
    price: number
}