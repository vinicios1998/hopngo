import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import NavigationMenu from '../../features/NavigationMenu';
import { Menus } from '../../types/types';

export default function Profile() {


    return (
        <Container sx={{ padding: '0' }}>
            <Box sx={{ maxWidth: 400, margin: 'auto' }}>
                <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                    User Profile
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Name:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {/* {name} */}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Surname:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {/* {surname} */}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Email:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {/* {email} */}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Bio:
                </Typography>
                <Typography variant="body1">
                    {/* {bio} */}
                </Typography>
            </Box>
            <NavigationMenu currentPage={Menus.SEARCH} />
        </Container>
    );
}