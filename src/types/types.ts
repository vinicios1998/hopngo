import { Dayjs } from "dayjs";

export enum Menus {
    SEARCH,
    PUBLISH,
    MESSAGES,
    PROFILE
}
export interface CityInfo {
    place_id: string,
    label: string,
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