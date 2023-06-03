import * as React from 'react';
import { Alert, Box, Button, Container, Snackbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import NaviagationListHeader from '../../components/naviationListHeader';
import { useParams } from 'react-router-dom';
import { getAvailableTrips, getCityInfo } from '../../service/service';
import dayjs from 'dayjs';
import { TripInfo, CityInfo } from '../../types/types';

export default function NavigationList() {
    const { from, to, date } = useParams()

    const [availableTrips, setAvailableTrips] = useState<TripInfo[]>([]);
    const [fromLocation, setFromLocation] = useState<CityInfo | null>(null);
    const [toLocation, setToLocation] = useState<CityInfo | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getCities = async () => {
            if (!from || !to || !date) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            setFromLocation(fromInfo)
            setToLocation(toInfo)
            if (fromInfo && toInfo && date) {
                const trips = await getAvailableTrips(fromInfo, toInfo, dayjs(date, 'DD-MM-YYYY'))
                setAvailableTrips(trips)
            }

        }
        getCities()
    }, [date, from, to])

    if (!date || !from || !to || !fromLocation || !toLocation) return null


    const handleClick = () => {
        setOpen(true);
    };
    return (
        <Container sx={{ padding: '0' }}>
            <NaviagationListHeader from={fromLocation.label} to={toLocation.label} date={dayjs(date, 'DD-MM-YYYY')} />
            <Container sx={{ marginTop: '4rem' }}>
                {availableTrips.map(x => (<NavigationCard tripInfo={x} />))}
                {availableTrips.length === 0 && <Typography fontWeight={'bold'} fontSize={'1rem'} sx={{ textAlign: 'center', padding: '2rem' }}>Sorry, we do not have any registered trips for this route.</Typography>}
            </Container>
            <Box
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    bottom: '3rem',
                    left: 0
                }} >
                <Button
                    color='secondary'
                    sx={{
                        fontWeight: 700,
                        margin: '0 2rem',
                        fontSize: '1rem',
                        color: 'primary.contrastText',
                    }}
                    size='large'
                    variant="contained"
                    onClick={handleClick}
                >
                    Track trips
                </Button>
                <Button sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'primary.contrastText',
                }}
                    size='large'
                    variant="contained">
                    Filter
                </Button>
            </Box>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open} autoHideDuration={3000}>
                <Alert severity="success" sx={{ width: '100%' }} onClick={() => setOpen(false)}>
                    We'll let you know when new trips come up!
                </Alert>
            </Snackbar>
        </Container>
    );
}