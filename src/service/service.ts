import dayjs, { Dayjs } from 'dayjs';
import cities from '../mock/cities.json'
import { CityInfo, TripInfo, CityResult, NewUserDto, LoginDto, NewTripDto, UserDto } from '../types/types';
import axios from 'axios'

const client = axios.create({
    baseURL: "https://hopngoapi.azurewebsites.net/api/",
    headers: {
        'authorization': localStorage.getItem('token')
    }
});

export const login = async (loginDto: LoginDto) => {
    try {
        if (!loginDto) return null
        const response = await client.post(`/users/login`, loginDto);
        if (response.status !== 200) return null
        return response.data.token as string
    } catch (err) {
        console.log(err)
        return null;
    }
};

export const getUser = async (email: string) => {
    try {
        if (!email) return null
        const response = await client.get(`/users/email/${email}`);
        if (response.status !== 200) return null
        return response.data.token as string
    } catch (err) {
        console.log(err)
        return null;
    }
};

export const createNewUser = async (userDto: NewUserDto) => {
    try {
        const response = await client.post(`/users`, userDto);
        if (response.status === 409) return ({ sucess: false, message: "User already exists!" })
        if (response.status >= 400) return ({ sucess: false, message: "Error! Try again later" })
        return { sucess: true, message: null }
    } catch (err) {
        console.log(err)
        return ({ sucess: false, message: "Error! Try again later" });
    }
};

const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const getCityInfo = async (text: string) => {
    try {
        if (!text) return null
        const response = await client.get(`/places/geocode?placeId=${text}`);
        const data = await response.data;
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
export const getPlacesGoogleAutocomplete = async (inputValue: string) => {
    try {
        const response = await client.get(`/places/autocomplete?input=${inputValue}`);
        return response.data as CityResult[];
    }
    catch (e) {
        return []
    }
};
export const getAvailableTrips = async (from: CityInfo, to: CityInfo, date: Dayjs) => {
    try {
        const response = await client.get(`trips/from/${from.place_id}/to/${to.place_id}/date/${date.format('DD-MM-YYYY')}`);
        const data = await response.data as TripInfo[]
        return data.map(x => ({
            ...x,
            date: dayjs(x.date, 'YYYY-MM-DD HH:mm:ss')
        }))
    } catch (err) {
        console.log(err)
        return [];
    }
};

export const postTrip = async (tripInfo: NewTripDto) => {
    try {
        const newItem = { ...tripInfo, date: tripInfo.date?.format('DD-MM-YYYY') }
        const response = await client.post(`trips`, newItem);
        await response.data()
    } catch (err) {
        console.log(err)
        return [];
    }
};

export const getTrip = async (id: string) => {
    try {
        const response = await client.get(`trips/id/${id}`);
        const data = await response.data as TripInfo
        data.date = dayjs(data.date, 'DD-MM-YYYY')

        return data
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

export const getUserMe = async () => {
    try {
        const response = await client.get(`users/me`);
        const data = await response.data as UserDto
        return data
    } catch (err) {
        console.log(err)
        return null;
    }
};