import * as React from 'react';
import { Box, Button, Container, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import NaviagationListHeader from '../../components/naviationListHeader';

export default function ReviewTrip() {
    return (
        <Container sx={{ padding: '0' }}>
            <Container sx={{ marginTop: '4rem' }}>
                <NavigationCard tripInfo={undefined} />
            </Container>
            <Container sx={{ marginTop: '4rem' }}>
                <Typography>Preço total</Typography>
                <Typography>10€</Typography>
            </Container>
            <Container sx={{ marginTop: '4rem' }}>
                <Typography>Preço total</Typography>
                <Typography>10€</Typography>
            </Container>
            <Box
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    bottom: '1rem',
                    left: 0
                }} >
                <Button
                    color='secondary'
                    sx={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'primary.contrastText',
                    }}
                    size='large'
                    variant="contained">
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
        </Container>
    );
}