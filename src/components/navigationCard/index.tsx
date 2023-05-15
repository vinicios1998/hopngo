import * as React from 'react';
import { Box, Container, Divider, SxProps, Theme, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AcUnitIcon from '@mui/icons-material/AcUnit';


interface INavigationCardProps {
    icon?: JSX.Element | null
    label?: string | null
    isActive?: boolean
}

const CardSegmentContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '8em',
    flexDirection: 'column',
    padding: '0.5rem'

});

const DestinationContainer = styled(Box)({
    whiteSpace: 'nowrap',
    flexDirection: 'column',
    alignItems: 'baseline',
    display: 'flex',
});

const RowFlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1
});

const BottomCardContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
});
export default function NavigationCard({ icon, label, isActive }: INavigationCardProps) {
    return (

        <Container sx={{ padding: '0.5rem 0' }} id="navigation-card-container">
            <Box >
                <RowFlexContainer>
                    <RowFlexContainer>
                        <CardSegmentContainer >
                            <Typography>10:00</Typography>
                            <Typography>13:00</Typography>
                        </CardSegmentContainer>
                        <CardSegmentContainer sx={{ padding: '0.5rem 0' }}>
                            <AdjustIcon sx={{ margin: '-4px' }} />
                            <Box sx={{ width: '2px', height: '100%', backgroundColor: 'black' }} />
                            <AdjustIcon sx={{ margin: '-4px' }} />
                        </CardSegmentContainer>
                        <CardSegmentContainer sx={{ alignItems: 'start' }}>
                            <DestinationContainer >
                                <Typography fontWeight={'bold'}>Estacao sao bento</Typography>
                                <Typography>Porto</Typography>
                            </DestinationContainer>
                            <DestinationContainer >
                                <Typography fontWeight={'bold'}>Apolonia</Typography>
                                <Typography>Lisboa</Typography>
                            </DestinationContainer>
                        </CardSegmentContainer>
                    </RowFlexContainer>
                    <CardSegmentContainer>
                        <Typography fontWeight={'bold'}>10,00€</Typography>
                    </CardSegmentContainer>
                </RowFlexContainer>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }} >
                    <BottomCardContainer >
                        <AccountCircleIcon sx={{ height: '3rem', width: '3rem' }} />
                        <Typography>Julia</Typography>
                    </BottomCardContainer>
                    <BottomCardContainer >
                        <AccessibleIcon />
                        <AcUnitIcon />
                    </BottomCardContainer>
                </Container>
            </Box>
            <Divider />
        </Container>

    );
}