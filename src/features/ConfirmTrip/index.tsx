import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCityInfo, getTrip } from '../../service/service';
import { CityInfo, TripInfo } from '../../types/types';
import DestinationInfo from '../../components/destinationInfo';
import DateHeader from '../../components/dateHeader/dateHeader';
import UserCard from '../../components/userCard';
import ApplePay from '../../assets/apple-pay.jpg';
import MbWay from '../../assets/mbway.png';

export default function ConfirmTrip() {
    const { from, to, idTrip } = useParams()

    const [trip, setTrip] = useState<TripInfo | null>();
    const [payment, setPayment] = useState("apple");



    useEffect(() => {
        const getCities = async () => {
            if (!from || !to || !idTrip) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            if (fromInfo && toInfo && idTrip) {
                const trip = await getTrip(parseInt(idTrip), fromInfo, toInfo)
                setTrip(trip)
            }

        }
        getCities()
    }, [idTrip, from, to])

    if (!idTrip || !from || !to || !trip) return null

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

            <Container sx={{
                padding: '2rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
            }}>
                <img
                    style={{
                        height: '3rem',
                        border: `#fbc02d ${payment === "apple" ? 'solid' : 'none'}`,
                        borderRadius: '8px',
                        padding: '0.5rem'
                    }}
                    src={ApplePay}
                    alt="ApplePay"
                    onClick={() => setPayment("apple")}
                />
                <img
                    style={{
                        height: '3rem',
                        border: `#fbc02d ${payment === "mbway" ? 'solid' : 'none'}`,
                        borderRadius: '8px',
                        padding: '0.5rem'
                    }}
                    src={MbWay}
                    alt="MbWay"
                    onClick={() => setPayment("mbway")}
                />
            </Container>
            <Button sx={{
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