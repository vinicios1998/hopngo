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
        const response = await fetch(
            `http://localhost:3001/api/geocode?placeId=${text}`
        );
        const data = await response.json();
        console.log(data)
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            const label = data.results[0].formatted_address
            return {
                place_id: text,
                label: label,
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            } as CityInfo
        }
        return null
    } catch (err) {
        console.log(err)
        return null;
    }
};
export const getAvailableTrips = async (from: CityInfo, to: CityInfo, date: Dayjs) => {
    try {
        const response = await fetch(
            `http://localhost:3001/api/trips/from/${from.place_id}/to/${to.place_id}/date/${date.format('DD-MM-YYYY')}`
        );
        const data = await response.json() as TripInfo[]
        return data.map(x => ({
            ...x,
            date: dayjs(x.date, 'YYYY-MM-DD HH:mm:ss')
        }))
    } catch (err) {
        console.log(err)
        return [];
    }
};

export const postTrip = async (tripInfo: TripInfo) => {
    try {
        const newItem = { ...tripInfo, date: tripInfo.date?.format('DD-MM-YYYY') }
        const response = await fetch(
            `http://localhost:3001/api/trips`
            , {
                mode: 'cors',
                method: 'POST', body: JSON.stringify(newItem), headers: {
                    "Content-Type": "application/json",
                }
            });
        await response.json()
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
            lat: parseFloat(x.lat),
            lng: parseFloat(x.lng)
        })) as CityInfo[]
    } catch (err) {
        console.log(err)
        return [];
    }
};