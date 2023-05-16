import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { ReactComponent as Logo } from '../assets/logo.svg'
import SearchBox from '../../components/searchBox';

export default function DestinationSearchCard() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [age, setAge] = useState(1);

    const handleChange = (event: SelectChangeEvent) => {
    };
    return (

        <Box
            sx={{
                height: '12rem',
                backgroundColor: 'background.paper',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '9px',
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr 1fr',
                gridColumnGap: '0.5rem',
                gridRowGap: '0.5rem',
                gridTemplateAreas: `
                    'from from from from'
                    'to to to to'
                    'date-picker date-picker date-picker seat-select'
                    'search-button search-button search-button search-button'`
            }}
        >
            <SearchBox sx={{ gridArea: 'from' }} label="from" />
            <SearchBox sx={{ gridArea: 'to' }} label="to" />
            <DatePicker slotProps={{ textField: { size: 'small' } }} sx={{ gridArea: 'date-picker' }} />
            <Select
                size='small'
                sx={{ gridArea: 'seat-select' }}
                value={age.toString()}
                label="Seats"
                onChange={handleChange}
            >
                {[...Array(5 + 1).keys()].slice(1).map(x => (
                    <MenuItem value={x}>{x}</MenuItem>
                ))}
            </Select>
            <Button sx={{
                gridArea: 'search-button',
                padding: 0,
                height: '100%',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'primary.contrastText'
            }} fullWidth variant="contained">Pesquisar</Button>
        </Box >
    );
}