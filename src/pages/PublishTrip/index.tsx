import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PublishTripCard from '../../features/PublishTripCard';
import NavigationMenu from '../../features/NavigationMenu';
import { Menus } from '../../types/types';

export default function PublishTrip() {

    return (
        <Container sx={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Container
                sx={{
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                    borderRadius: '0 0 1rem 1rem'
                }}
            >
                <Typography sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }} fontWeight={'bold'} fontSize={32} color={'white'} > Offer a ride</Typography>
                <PublishTripCard />
            </Container >
            <Container sx={{ flex: '1 1 auto', padding: '1rem 0 5rem 0' }}>
            </Container>
            <NavigationMenu currentPage={Menus.PUBLISH} />
        </Container>
    );
}