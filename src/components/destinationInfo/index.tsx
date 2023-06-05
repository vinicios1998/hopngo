import * as React from 'react';
import { Box, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { TripInfo } from '../../types/types';


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

export default function DestinationInfo({ tripInfo }: INavigationCardProps) {
    return (
        <RowFlexContainer>
            <CardSegmentContainer >
                {tripInfo?.date && <Typography>{tripInfo.date.format('HH:mm')}</Typography>}
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
    );
}