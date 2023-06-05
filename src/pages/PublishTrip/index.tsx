import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PublishTripCard from '../../features/PublishTripCard';
import NavigationMenu from '../../features/NavigationMenu';
import { Menus } from '../../types/types';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import AppInfo from '../../components/appInfo';

export default function PublishTrip() {

    return (
        <Container maxWidth={false} disableGutters sx={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <Logo style={{ opacity: '0.5' }} height={'2rem'} />
                <Typography sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }} fontWeight={'bold'} fontSize={32} color={'white'} > Offer a ride</Typography>
                <PublishTripCard />
            </Container >
            <Container sx={{ flex: '1 1 auto', padding: '1rem 0 5rem 0' }}>
                <AppInfo />
            </Container>
            <NavigationMenu currentPage={Menus.PUBLISH} />
        </Container>
    );
}