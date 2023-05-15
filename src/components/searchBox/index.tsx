import * as React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, SelectChangeEvent, SxProps, TextField, Theme } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchBoxProps {
    label: string
    sx?: SxProps<Theme> | undefined
}

export default function SearchBox({ label, sx }: ISearchBoxProps) {
    return (
        <FormControl size='small' sx={sx} fullWidth margin='none' variant="outlined">
            <InputLabel variant='outlined'>{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                endAdornment={
                    <InputAdornment position="start">
                        <IconButton
                            edge="start"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                label="search"
            />
        </FormControl>
    );
}