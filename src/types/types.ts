import { Dayjs } from "dayjs";

export interface NewUserDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    bio: string;
}

export interface UserDto {
    name: string;
    surname: string;
    bio: string;
}

export interface LoginDto {
    email: string;
    password: string;
}
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
    email: string;
}

export interface TripSearchParams {
    from: string,
    to: string,
    date: string,
    seats: number
}
export interface NewTripDto {
    userId: string,
    from: CityInfo,
    to: CityInfo,
    availableSeats: number
    date: Dayjs
    time: Dayjs
    duration: number
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
}

export interface CityResult {
    description: string;
    place_id: string;
}

export interface LocationInfo {
    description: string;
    place_id: string;
    lat: number;
    lng: number;
}