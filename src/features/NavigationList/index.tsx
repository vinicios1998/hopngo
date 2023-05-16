import * as React from 'react';
import { Box, Button, Container, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import NaviagationListHeader from '../../components/naviationListHeader';

export default function NavigationList() {
    return (
        <Container sx={{ padding: '0' }}>
            <NaviagationListHeader />
            <Container sx={{ marginTop: '4rem' }}>
                <NavigationCard />
                <NavigationCard />
                <NavigationCard />
                <NavigationCard />
            </Container>
            <Box
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-around',
                    bottom: '1rem'
                }} >
                <Button
                    color='secondary'
                    size='large'
                    sx={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'primary.contrastText',
                    }} variant="contained">Track trips
                </Button>
                <Button sx={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'primary.contrastText',
                }} variant="contained">Filter
                </Button>
            </Box>
        </Container>
    );
}