import * as React from 'react';
import { Autocomplete, IconButton, InputAdornment, SxProps, TextField, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CityInfo } from '../../types/types';

interface ISearchBoxProps {
    label: string
    sx?: SxProps<Theme> | undefined
    updateLocation: (location: CityInfo | null) => void
    cities: CityInfo[]

}

export default function SearchBox({ label, sx, updateLocation, cities }: ISearchBoxProps) {
    const onChange = (event: React.SyntheticEvent, value: CityInfo | null) => {
        updateLocation(value);
    }

    return (
        <Autocomplete
            disablePortal
            fullWidth
            options={cities}
            getOptionLabel={(option) => option.label}
            placeholder={label}
            size='medium'
            sx={sx}
            onChange={(e, v) => onChange(e, v)}
            renderInput={(params) => {
                params.InputProps.endAdornment = (
                    <InputAdornment position="end">
                        <IconButton edge="end">
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
                return (
                    <TextField
                        variant='outlined'
                        label={label}
                        placeholder={label}
                        {...params}
                        fullWidth
                    />
                )
            }}
        />
    );
}