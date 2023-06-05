import * as React from 'react';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityInfo, getUserMe, postTrip } from '../../service/service';
import { CityInfo, NewTripDto, UserDto } from '../../types/types';
import DateHeader from '../../components/dateHeader/dateHeader';
import dayjs from 'dayjs';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StarIcon from '@mui/icons-material/Star';

const CardSegmentContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '8em',
    flexDirection: 'column',
    padding: '0.5rem'

});

const DestinationContainer = styled(Box)({
    whiteSpace: 'nowrap',
    flexDirection: 'column',
    alignItems: 'baseline',
    display: 'flex',
});

const RowFlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1
});


const RowFlexContainerUser = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '1rem'
});

const BottomCardContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
});

export default function ReviewTrip() {
    const navigate = useNavigate()
    const { from, to, date, time, seats } = useParams()
    const dateDayjs = dayjs(date, 'DD-MM-YYYY')
    const timeDayjs = dayjs(date, 'HH-mm')

    const [fromLocation, setFromLocation] = useState<CityInfo | null>(null);
    const [toLocation, setToLocation] = useState<CityInfo | null>(null);
    const [user, setUser] = useState<UserDto | null>(null);

    useEffect(() => {
        const getCities = async () => {
            if (!from || !to) return
            const fromInfo = await getCityInfo(from)
            const toInfo = await getCityInfo(to)
            setFromLocation(fromInfo)
            setToLocation(toInfo)
            const user = await getUserMe()
            setUser(user)
        }
        getCities()
    }, [from, to])

    if (!from || !to || !fromLocation || !toLocation) return null

    const trip = {
        from: fromLocation,
        to: toLocation,
        availableSeats: parseInt(seats || '1'),
        date: dateDayjs,
        time: timeDayjs,
        duration: 2,
    } as NewTripDto

    const handleSelect = async () => {

        await postTrip(trip)
        navigate(`/`)
    }
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '100vh',
            overflow: 'auto'
        }}>
            <DateHeader date={trip.date} />
            <Box sx={{ height: '3rem' }} />
            <Container sx={{ padding: '1rem 0rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 1rem 1rem' }}>
                    <Typography color={'primary.dark'} fontSize={'1.5rem'}>{trip.date.format('dddd')}, {trip.date.format('DD MMM')}</Typography>
                </Box>
                <RowFlexContainer>
                    <CardSegmentContainer >
                        <Typography>{dateDayjs.format('HH:mm')}</Typography>
                        <Typography>{dateDayjs.add(200, 'minute').format('HH:mm')}</Typography>
                    </CardSegmentContainer>
                    <CardSegmentContainer sx={{ padding: '0.5rem 0' }}>
                        <AdjustIcon sx={{ margin: '-4px' }} />
                        <Box sx={{ width: '2px', height: '100%', backgroundColor: 'black' }} />
                        <AdjustIcon sx={{ margin: '-4px' }} />
                    </CardSegmentContainer>
                    <CardSegmentContainer sx={{ alignItems: 'start' }}>
                        <DestinationContainer >
                            <Typography fontWeight={'bold'}>{fromLocation.label}</Typography>
                        </DestinationContainer>
                        <DestinationContainer >
                            <Typography fontWeight={'bold'}>{fromLocation.label}</Typography>
                        </DestinationContainer>
                    </CardSegmentContainer>
                </RowFlexContainer>
            </Container>
            <Container sx={{ padding: '1rem 0rem' }}>
                <Typography sx={{ textAlign: 'center' }} fontSize={'2rem'}>Your profile</Typography>
                <Container sx={{ padding: '0.5rem 0' }} id="navigation-card-container">
                    <RowFlexContainerUser>
                        <BottomCardContainer >
                            <AccountCircleIcon sx={{ height: '3rem', width: '3rem' }} />
                            <Typography>{user?.name}</Typography>
                        </BottomCardContainer>
                        <BottomCardContainer >
                            <AccessibleIcon />
                            <AcUnitIcon />
                        </BottomCardContainer>
                    </RowFlexContainerUser>
                    <RowFlexContainerUser>
                        <BottomCardContainer >
                            <StarIcon sx={{ height: '1rem', width: '1rem' }} />
                            <Typography>4/5</Typography>
                        </BottomCardContainer>
                        <BottomCardContainer >
                            <Typography>15 Trips</Typography>
                        </BottomCardContainer>
                    </RowFlexContainerUser>
                    <RowFlexContainerUser >
                        <Typography>{user?.bio}</Typography>
                    </RowFlexContainerUser>
                </Container>            </Container>
            <Container sx={{ height: '3rem' }} />
            <Button
                onClick={() => handleSelect()}
                sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'primary.contrastText',
                    position: {
                        xs: 'fixed',
                        md: 'relative',
                    },
                    bottom: '0',
                    left: '0',
                    height: '3rem'
                }}
                fullWidth
                size='large'
                variant="contained">
                Publish
            </Button>
        </Container>
    );
}