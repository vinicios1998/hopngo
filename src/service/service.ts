import dayjs, { Dayjs } from 'dayjs';
import cities from '../mock/cities.json'
import users from '../mock/users.json'
import rides from '../mock/rides.json'
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
        const filtered = rides.filter(x => x.from === from.label && x.to === to.label)
        const result = [] as TripInfo[]

        filtered.forEach((x, i) => {
            const user = users.find(u => u.id === x.user)
            if (!user) return
            result.unshift({
                id: x.id,
                user: user,
                from: from,
                fromLocation: x.fromLocation,
                to: to,
                toLocation: x.toLocation,
                date: dayjs(x.date, 'DD-MM-YYYY').add(getRandomInteger(0, 20), 'hour'),
                price: x.price,
                duration: x.duration
            } as TripInfo)
        })
        return result
    } catch (err) {
        console.log(err)
        return [];
    }
};

export const getTrip = async (id: number, from: CityInfo, to: CityInfo) => {
    try {
        const tripMock = rides.find(x => x.id === id)
        if (!tripMock) return null
        const user = users.find(u => u.id === tripMock.user)
        if (!user) return null
        return {
            id: tripMock.id,
            user: user,
            from: from,
            fromLocation: tripMock.fromLocation,
            to: to,
            toLocation: tripMock.toLocation,
            date: dayjs(tripMock.date, 'DD-MM-YYYY').add(getRandomInteger(0, 20), 'hour'),
            price: tripMock.price,
            duration: tripMock.duration
        } as TripInfo
    } catch (err) {
        console.log(err)
        return null;
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