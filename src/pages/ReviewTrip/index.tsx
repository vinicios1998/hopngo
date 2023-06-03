import * as React from 'react';
import { Box, Button, Container, SelectChangeEvent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import NaviagationListHeader from '../../components/naviationListHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityInfo, getTrip } from '../../service/service';
import { CityInfo, TripInfo } from '../../types/types';
import DestinationInfo from '../../components/destinationInfo';
import DateHeader from '../../components/dateHeader/dateHeader';
import dayjs from 'dayjs';
import { Padding } from '@mui/icons-material';
import UserCard from '../../components/userCard';

export default function ReviewTrip() {
    const navigate = useNavigate()
    const { from, to, idTrip } = useParams()

    const [trip, setTrip] = useState<TripInfo | null>();
    const [fromLocation, setFromLocation] = useState<CityInfo | null>(null);
    const [toLocation, setToLocation] = useState<CityInfo | null>(null);

    useEffect(() => {
        const getCities = async () => {
            if (!from || !to || !idTrip) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            setFromLocation(fromInfo)
            setToLocation(toInfo)
            if (fromInfo && toInfo && idTrip) {
                const trip = await getTrip(parseInt(idTrip), fromInfo, toInfo)
                setTrip(trip)
            }

        }
        getCities()
    }, [idTrip, from, to])

    if (!idTrip || !from || !to || !trip) return null
    const handleSelect = () => {
        navigate(`/reserve/from/${trip.from.place_id}/to/${trip.to.place_id}/trip/${trip.id}/confirmation`)
    }
    return (
        <Container sx={{ padding: '0' }}>
            <DateHeader date={trip.date} />
            <Box sx={{ height: '3rem' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                <Typography color={'primary.dark'} fontSize={'1.5rem'}>{trip.date.format('dddd')}, {trip.date.format('DD MMM')}</Typography>
            </Box>
            <Container sx={{ padding: '1rem' }}>
                <DestinationInfo tripInfo={trip} />
            </Container>
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: 'primary.light',
                padding: '1rem'
            }}>
                <Typography>Preço total</Typography>
                <Typography>{trip.price}€</Typography>
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
                Continue
            </Button>
        </Container>
    );
}