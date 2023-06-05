import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import DestinationSearchCard from '../../features/DestinationSearchCard';
import SearchHistory from '../../features/SearchHistory';
import NavigationMenu from '../../features/NavigationMenu';
import AppInfo from '../../components/appInfo';
import { Menus } from '../../types/types';

export default function Home() {

    return (
        <Container sx={{ padding: '0' }} maxWidth={false} disableGutters>
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
                <Typography sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }} fontWeight={'bold'} fontSize={32} color={'white'} > Hop n' Go</Typography>
                <DestinationSearchCard />
            </Container >
            <AppInfo />
            <Container disableGutters maxWidth={false} sx={{
                height: '0.5rem',
                backgroundColor: 'primary.light',
                padding: '0.5rem 0',
                display: {
                    xs: 'none',
                    md: 'block',
                }
            }} />


            <SearchHistory />
            <NavigationMenu currentPage={Menus.SEARCH} />
        </Container>
    );
}