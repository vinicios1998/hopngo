import { Dayjs } from 'dayjs';
import cities from '../mock/cities.json'
import users from '../mock/users.json'
import { CityInfo, TripInfo } from '../types/types';


const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const getCityInfo = async (text: string) => {
    try {
        if (!text) return null
        const filteredCities = cities.find(city => city.label.toUpperCase() === text.toUpperCase())
        if (!filteredCities) return null
        return {
            label: filteredCities.label,
            country: filteredCities.country,
            lat: parseFloat(filteredCities.lat),
            lng: parseFloat(filteredCities.lng)
        } as CityInfo
    } catch (err) {
        console.log(err)
        return null;
    }
};
export const getAvailableTrips = async (from: CityInfo, to: CityInfo, date: Dayjs) => {
    try {
        const numberOfUsers = getRandomInteger(3, 15)
        const shuffledUsers = users.sort(() => Math.random() - 0.5);
        const randomUsers = shuffledUsers.slice(0, numberOfUsers);
        return randomUsers.map((x, i) => ({
            user: x,
            from: from,
            to: to,
            date: date.add(getRandomInteger(0, 20), 'hour'),
            price: getRandomInteger(5, 20),
            duration: getRandomInteger(1, 6)
        })) as TripInfo[]
    } catch (err) {
        console.log(err)
        return [];
    }
};
export const fetchCitiesNames = async (text: string) => {
    try {
        if (!text) return []
        const filteredCities = cities.filter(city => city.label.toUpperCase().startsWith(text.toUpperCase()))
        filteredCities.map(x => x.label)
    } catch (err) {
        console.log(err)
        return [];
    }
};

export const fetchCities = async (text: string) => {
    try {
        let filteredCities = cities;
        if (text)
            filteredCities = cities.filter(city => city.label.toUpperCase().startsWith(text.toUpperCase()))
        return filteredCities.map(x => ({
            label: x.label,
            country: x.country,
            lat: parseFloat(x.lat),
            lng: parseFloat(x.lng)
        })) as CityInfo[]
    } catch (err) {
        console.log(err)
        return [];
    }
};