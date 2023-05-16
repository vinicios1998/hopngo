import * as React from 'react';
import { Autocomplete, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, SxProps, TextField, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import cities from '../../mock/cities.json'

interface ISearchBoxProps {
    label: string
    sx?: SxProps<Theme> | undefined
}

export default function SearchBox({ label, sx }: ISearchBoxProps) {


    return (
        <Autocomplete
            disablePortal
            fullWidth
            options={cities}
            getOptionLabel={(option) => option.label}
            placeholder={label}
            size='medium'
            sx={sx}
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