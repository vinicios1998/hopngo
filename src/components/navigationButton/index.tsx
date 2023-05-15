import * as React from 'react';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface INavigationButtonProps {
    icon?: JSX.Element | null
    label?: string | null
    isActive?: boolean
}
export default function NavigationButton({ icon, label, isActive }: INavigationButtonProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '4rem',
            color: isActive ? 'primary.main' : 'text.secondary',
        }}>
            {icon}
            {label && <Typography fontWeight={isActive ? 'normal' : 'bold'} fontSize={12} > {label}</Typography>}
        </Box>

    );
}