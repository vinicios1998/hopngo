import * as React from 'react';
import { Box, Container, SxProps, Theme, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TripSearchParams } from '../../types/types';
import dayjs from 'dayjs';
interface IHistoryCardProps {
    searchParams: TripSearchParams
    sx?: SxProps<Theme> | undefined
}

export default function HistoryCard({ searchParams, sx }: IHistoryCardProps) {
    const date = dayjs(searchParams.date, 'DD-MM-YYYY')
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <HistoryIcon />
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                    <Typography>{searchParams.from}</Typography>
                    <ArrowRightAltIcon />
                    <Typography>{searchParams.to}</Typography>
                </Box>
                <Typography>{date.format('dddd')}, {date.format('DD MMM')}</Typography>
            </Box>
            <ArrowForwardIosIcon />
        </Container>
    );
}