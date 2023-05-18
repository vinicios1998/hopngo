import * as React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

interface INaviagationListHeaderProps {
    date: Dayjs
}
export default function DateHeader({ date }: INaviagationListHeaderProps) {
    const navigate = useNavigate()

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'initial',
            top: '0',
            left: 0,
            height: '3rem',
            position: 'fixed'
        }}>
            <IconButton onClick={() => { navigate(-1) }} >
                <ArrowBackIosIcon />
            </IconButton>

        </Container>
    );
}