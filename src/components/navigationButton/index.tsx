import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface INavigationButtonProps {
    icon?: JSX.Element | null
    label?: string | null
    isActive?: boolean,
    onClick?:()=>void
}
export default function NavigationButton({ icon, label, isActive, onClick }: INavigationButtonProps) {
    return (
        <Button 
        onClick={onClick}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '4rem',
            color: isActive ? 'text.primary' : 'text.secondary',
        }}>
            {icon}
            {label && <Typography fontWeight={isActive ? 'bold' : 'normal'} fontSize={'0.8rem'} > {label}</Typography>}
        </Button>

    );
}