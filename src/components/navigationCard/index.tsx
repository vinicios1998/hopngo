import * as React from 'react';
import { Box, Container, Divider, SxProps, Theme, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { TripInfo } from '../../types/types';
import { useNavigate } from 'react-router-dom';


interface INavigationCardProps {
    tripInfo: TripInfo
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
export default function NavigationCard({ tripInfo }: INavigationCardProps) {
    const navigate = useNavigate()
    console.log(tripInfo)

    const handleSelect = () => {
        navigate(`/reserve/from/${tripInfo.from}/to/${tripInfo.to}/trip/${tripInfo.id}`)
    }
    return (

        <Container sx={{ padding: '0.5rem 0' }} id="navigation-card-container" onClick={() => handleSelect()}>
            <Box >
                <RowFlexContainer>
                    <RowFlexContainer>
                        <CardSegmentContainer >
                            <Typography>{tripInfo.date.format('HH:mm')}</Typography>
                            <Typography>{tripInfo.date.add(tripInfo.duration, 'minute').format('HH:mm')}</Typography>
                        </CardSegmentContainer>
                        <CardSegmentContainer sx={{ padding: '0.5rem 0' }}>
                            <AdjustIcon sx={{ margin: '-4px' }} />
                            <Box sx={{ width: '2px', height: '100%', backgroundColor: 'black' }} />
                            <AdjustIcon sx={{ margin: '-4px' }} />
                        </CardSegmentContainer>
                        <CardSegmentContainer sx={{ alignItems: 'start' }}>
                            <DestinationContainer >
                                <Typography fontWeight={'bold'}>{tripInfo.fromLocation}</Typography>
                                <Typography>{tripInfo.from.label}</Typography>
                            </DestinationContainer>
                            <DestinationContainer >
                                <Typography fontWeight={'bold'}>{tripInfo.toLocation}</Typography>
                                <Typography>{tripInfo.to.label}</Typography>
                            </DestinationContainer>
                        </CardSegmentContainer>
                    </RowFlexContainer>
                    <CardSegmentContainer>
                        <Typography fontWeight={'bold'}>{tripInfo.price}€</Typography>
                    </CardSegmentContainer>
                </RowFlexContainer>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }} >
                    <BottomCardContainer >
                        <AccountCircleIcon sx={{ height: '3rem', width: '3rem' }} />
                        <Typography>{tripInfo.user.name}</Typography>
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