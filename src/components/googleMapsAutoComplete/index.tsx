import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { SxProps, TextField, Theme } from '@mui/material';
import { CityInfo, CityResult } from '../../types/types';
import { getCityInfo, getPlacesGoogleAutocomplete } from '../../service/service';

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
        const coordenates = await getCityInfo(value.place_id)
        if (!coordenates) return
        updateLocation({ label: value.description, lat: coordenates.lat, lng: coordenates.lng, place_id: value.place_id })
    };




    const fetchData = async (description: string) => {
        if (!description) return
        console.log('fetchData')
        const values = await getPlacesGoogleAutocomplete(description)
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