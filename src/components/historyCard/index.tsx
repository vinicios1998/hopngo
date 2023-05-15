import * as React from 'react';
import { Box, Container, SxProps, Theme, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface IHistoryCardProps {
    label: string
    sx?: SxProps<Theme> | undefined
}

export default function HistoryCard({ label, sx }: IHistoryCardProps) {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <HistoryIcon />
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography>Aveiro</Typography>
                    <ArrowRightAltIcon />
                    <Typography>Porto</Typography>
                </Box>
                <Typography>Monday, 04 April 1 set</Typography>
            </Box>
            <ArrowForwardIosIcon />
        </Container>
    );
}