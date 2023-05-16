import * as React from 'react';
import { Box, Container, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import NavigationCard from '../../components/navigationCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EastIcon from '@mui/icons-material/East';
export default function NaviagationListHeader() {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            backgroundColor: 'grey.400',
            height: '4rem'
        }}>
            <ArrowBackIosIcon />
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography>Aveiro</Typography>
                    <EastIcon sx={{ margin: '0rem 1rem' }} />
                    <Typography>Porto</Typography>
                </Box>
                <Typography>Monday, 04 April 1 set</Typography>
            </Box>
        </Container>
    );
}