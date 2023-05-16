import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import DestinationSearchCard from '../DestinationSearchCard';
import SearchHistory from '../SearchHistory';
import NavigationMenu from '../NavigationMenu';

export default function BoxSx() {

    return (
        <Container sx={{ padding: '0' }}>
            <Container
                sx={{
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem'
                }}
            >
                <Logo height={'2rem'} />
                <Typography sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)' }} fontWeight={'bold'} fontSize={32} color={'white'} > Hop n' Go</Typography>
                <DestinationSearchCard />
            </Container >
            <SearchHistory />
            <NavigationMenu />
        </Container>
    );
}