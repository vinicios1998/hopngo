import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { ReactComponent as Logo } from '../assets/logo.svg'
import SearchBox from '../components/searchBox';
import DestinationSearchCard from '../features/DestinationSearchCard';
import HistoryCard from '../components/historyCard';
import SearchHistory from '../features/SearchHistory';
import NavigationMenu from '../features/NavigationMenu';

export default function BoxSx() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [age, setAge] = useState(1);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(parseInt(event.target.value));
    };
    return (
        <Container sx={{ padding: '0' }}>
            <Container
                sx={{
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem'
                }}
            >
                <Logo height={'2rem'} />
                <Typography sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }} fontWeight={'bold'} fontSize={32} color={'white'} > Hop n' Go</Typography>
                <DestinationSearchCard />
            </Container >
            <SearchHistory />
            <NavigationMenu />
        </Container>
    );
}