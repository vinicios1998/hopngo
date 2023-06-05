import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityInfo, getTrip } from '../../service/service';
import { TripInfo } from '../../types/types';
import DestinationInfo from '../../components/destinationInfo';
import DateHeader from '../../components/dateHeader/dateHeader';
import UserCard from '../../components/userCard';

export default function ReviewTrip() {
    const navigate = useNavigate()
    const { from, to, idTrip } = useParams()

    const [trip, setTrip] = useState<TripInfo | null>(null);

    useEffect(() => {
        const getCities = async () => {
            if (!from || !to || !idTrip) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            if (fromInfo && toInfo && idTrip) {
                const trip = await getTrip(idTrip)
                setTrip(trip)
            }

        }
        getCities()
    }, [idTrip, from, to])

    if (!idTrip || !from || !to || !trip || !trip.date) return null

    const handleSelect = () => {
        navigate(`/`)
    }

    if (!trip) return null
    return (
        <Container sx={{ padding: '0' }}>
            <DateHeader date={trip?.date} />
            <Box sx={{ height: '3rem' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                {trip?.date && <Typography color={'primary.dark'} fontSize={'1.5rem'}>{trip?.date?.format('dddd')}, {trip?.date?.format('DD MMM')}</Typography>}
            </Box>
            <Container sx={{ padding: '1rem' }}>
                <DestinationInfo tripInfo={trip} />
            </Container>
            <UserCard user={trip.user} />
            <Button
                onClick={() => handleSelect()}
                sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'primary.contrastText',
                    position: 'fixed',
                    bottom: 0
                }}
                fullWidth
                size='large'
                variant="contained">
                Confirm
            </Button>
        </Container>
    );
}