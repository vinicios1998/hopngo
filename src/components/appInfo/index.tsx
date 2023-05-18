import * as React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GppGoodIcon from '@mui/icons-material/GppGood';
import FastForwardIcon from '@mui/icons-material/FastForward';

const RowFlexContainer = styled(Box)({
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
export default function AppInfo() {


    return (
        <Container sx={{
            padding: '0.5rem 0', display: {
                xs: 'none',
                md: 'block',
            }
        }} id="navigation-card-container">
            <RowFlexContainer >
                <Box sx={{ flex: '1 1 0', padding: '0rem 1rem' }}>
                    <AttachMoneyIcon fontSize='large' color='disabled' />
                    <Typography fontWeight={'bold'}>Your pick of rides at low prices</Typography>
                    <Typography>No matter where you’re going, find the perfect ride from our wide range of destinations and routes at low prices.</Typography>
                </Box>
                <Box sx={{ flex: '1 1 0', padding: '1rem' }}>
                    <GppGoodIcon fontSize='large' color='disabled' />
                    <Typography fontWeight={'bold'}>Trust who you travel with</Typography>
                    <Typography>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</Typography>
                </Box>
                <Box sx={{ flex: '1 1 0', padding: '1rem' }}>
                    <FastForwardIcon fontSize='large' color='disabled' />
                    <Typography fontWeight={'bold'}>Scroll, click, tap and go!</Typography>
                    <Typography>
                        Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</Typography>
                </Box>
            </RowFlexContainer>
        </Container>
    );
}