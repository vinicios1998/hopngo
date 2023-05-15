import * as React from 'react';
import { Container, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import HistoryCard from '../../components/historyCard';

export default function SearchHistory() {
    return (
        <Container>
            <Typography fontWeight={'bold'} fontSize={24} > History</Typography>
            <HistoryCard label={''} />
            <HistoryCard label={''} />
            <HistoryCard label={''} />
        </Container>
    );
}