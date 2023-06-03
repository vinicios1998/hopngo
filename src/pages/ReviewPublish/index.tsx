import * as React from 'react';
import { Box, Button, Container, SelectChangeEvent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import NaviagationListHeader from '../../components/naviationListHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityInfo, getTrip, postTrip } from '../../service/service';
import { CityInfo, TripInfo } from '../../types/types';
import DestinationInfo from '../../components/destinationInfo';
import DateHeader from '../../components/dateHeader/dateHeader';
import dayjs from 'dayjs';
import { Padding } from '@mui/icons-material';
import UserCard from '../../components/userCard';
import users from '../../mock/users.json'

export default function ReviewTrip() {
    const navigate = useNavigate()
    const { from, to, date } = useParams()
    const dateDayjs = dayjs(date, 'DD-MM-YYYY')
    const [fromLocation, setFromLocation] = useState<CityInfo | null>(null);
    const [toLocation, setToLocation] = useState<CityInfo | null>(null);

    useEffect(() => {
        const getCities = async () => {
            if (!from || !to) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            setFromLocation(fromInfo)
            setToLocation(toInfo)

        }
        getCities()
    }, [from, to])

    if (!from || !to || !fromLocation || !toLocation) return null

    const trip = {
        id: 0,
        user: users[0],
        from: fromLocation,
        fromLocation: fromLocation.label,
        to: toLocation,
        toLocation: toLocation.label,
        availableSeats: 2,
        date: dateDayjs,
        duration: 2,
        price: 2
    } as TripInfo

    const handleSelect = async () => {

        await postTrip(trip)
        navigate(`/`)
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
            <Typography sx={{ textAlign: 'center', padding: '2rem' }} fontSize={'2rem'}>Your profile</Typography>
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
                Publish
            </Button>
        </Container>
    );
}