import * as React from 'react';
import { Box, Container, Divider, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { User } from '../../types/types';
import StarIcon from '@mui/icons-material/Star';

interface IUserCardProps {
    user: User
}

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
export default function UserCard({ user }: IUserCardProps) {
    return (
        <Container sx={{ padding: '0.5rem 0' }} id="navigation-card-container">
            <RowFlexContainer>
                <BottomCardContainer >
                    <AccountCircleIcon sx={{ height: '3rem', width: '3rem' }} />
                    <Typography>{user.name}</Typography>
                </BottomCardContainer>
                <BottomCardContainer >
                    <AccessibleIcon />
                    <AcUnitIcon />
                </BottomCardContainer>
            </RowFlexContainer>
            <RowFlexContainer>
                <BottomCardContainer >
                    <StarIcon sx={{ height: '1rem', width: '1rem' }} />
                    <Typography>{user.rate}/5</Typography>
                </BottomCardContainer>
                <BottomCardContainer >
                    <Typography>15 Trips</Typography>
                </BottomCardContainer>
            </RowFlexContainer>
            <RowFlexContainer >
                <Typography>{user.bio}</Typography>
            </RowFlexContainer>
        </Container>

    );
}