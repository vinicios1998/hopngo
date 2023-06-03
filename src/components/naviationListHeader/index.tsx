import * as React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EastIcon from '@mui/icons-material/East';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

interface INaviagationListHeaderProps {
    from: string
    to: string
    date: Dayjs
}
export default function NaviagationListHeader({ from, to, date }: INaviagationListHeaderProps) {
    const navigate = useNavigate()

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            left: 0,
            right: 0,
            backgroundColor: 'primary.light',
            height: '4rem'
        }}>
            <IconButton onClick={() => { navigate(-1) }} >
                <ArrowBackIosIcon />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0.5rem 3rem 0.5rem 1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography>{from}</Typography>
                    <EastIcon sx={{ margin: '0rem 1rem' }} />
                    <Typography>{to}</Typography>
                </Box>
                <Typography>{date.format('dddd')}, {date.format('DD MMM')}</Typography>
            </Box>
        </Container>
    );
}