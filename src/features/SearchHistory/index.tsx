import * as React from 'react';
import { Container, SelectChangeEvent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import HistoryCard from '../../components/historyCard';
import { TripSearchParams } from '../../types/types';

export default function SearchHistory() {
    const [history, setHistory] = useState<TripSearchParams[]>([]);

    useEffect(() => {
        const historyJson = localStorage.getItem('search-history')
        if (historyJson) {
            setHistory(JSON.parse(historyJson) as TripSearchParams[])
        }
    }, [])
    return (
        <Container sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem'
        }}>
            <Typography fontWeight={'bold'} fontSize={24} > History</Typography>
            {history.map(x => (
                <HistoryCard searchParams={x} />
            ))}
        </Container>
    );
}