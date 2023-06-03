import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { SxProps, TextField, Theme } from '@mui/material';
import { CityInfo } from '../../types/types';

interface CityResult {
    description: string;
    place_id: string;
}


export interface LocationInfo {
    description: string;
    place_id: string;
    lat: number;
    lng: number;
}

interface ICitySearchProps {
    label: string
    sx?: SxProps<Theme> | undefined
    updateLocation: (location: CityInfo) => void
}

const CitySearch = ({ label, sx, updateLocation }: ICitySearchProps) => {
    const [city, setCity] = useState<CityResult | null>(null);
    const [cities, setCities] = useState<CityResult[]>([]);

    const handleCityChange = async (event: React.ChangeEvent<{}>, value: CityResult | null) => {
        setCity(value);
        if (!value) return
        const coordenates = await searchCoordinates(value.place_id)
        if (!coordenates) return
        updateLocation({ label: value.description, lat: coordenates.lat, lng: coordenates.lng, place_id: value.place_id })
    };

    const searchCoordinates = async (placeId: string) => {
        try {
            const response = await fetch(
                `http://localhost:3001/api/geocode?placeId=${placeId}`
            );
            const data = await response.json();
            console.log(data)
            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                return ({ lat, lng });
            } else {
                return (null);
            }
        }
        catch (e) {
            return null
        }
    };

    const fetchCitySuggestions = async (inputValue: string) => {
        try {
            const response = await fetch(
                `http://localhost:3001/api/autocomplete?input=${inputValue}`
            );
            const data = await response.json();
            return data as CityResult[];
        }
        catch (e) {
            return []
        }
    };

    const fetchData = async (description: string) => {
        if (!description) return
        console.log('fetchData')
        const values = await fetchCitySuggestions(description)
        setCities(values)
    };

    return (
        <Autocomplete
            sx={sx}
            autoComplete
            includeInputInList
            filterSelectedOptions
            filterOptions={(x) => x}
            options={cities}
            getOptionLabel={(option) => option.description}
            value={city}
            onChange={(event, value) => handleCityChange(event, value)}
            onInputChange={(event, value) => fetchData(value)}
            renderInput={(params) => (
                <TextField {...params} label={label} variant="outlined" />
            )}
        />
    );
};

export default CitySearch;