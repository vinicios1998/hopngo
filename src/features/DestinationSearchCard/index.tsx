import * as React from 'react';
import { Button, Container, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { CityInfo, TripSearchParams } from '../../types/types';
import { fetchCities } from '../../service/service';
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import SearchGoogleMaps from '../../components/googleMapsAutoComplete';
import SeatIcon from '@mui/icons-material/EventSeat';

export default function DestinationSearchCard() {
    const navigate = useNavigate()

    const [cities, setCities] = useState<CityInfo[]>([]);
    const [fromLocation, setFromLocation] = useState<CityInfo | null>(null);
    const [toLocation, setToLocation] = useState<CityInfo | null>(null);
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(Date.now()));
    const [seatCount, setSeatCount] = useState(1);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        const getCities = async () => {
            const cities = await fetchCities('')
            setCities(cities)
        }
        getCities()
    }, [])

    const handleChangeDate = (value: Dayjs) => {
        setStartDate(value)
    };

    const handleChangeSeats = (event: SelectChangeEvent) => {
        setSeatCount(parseInt(event.target.value))
    };

    const handleSearch = () => {
        if (!fromLocation || !toLocation || !startDate) return


        const historyEntry: TripSearchParams = {
            from: fromLocation.label,
            to: toLocation.label,
            date: startDate.format('DD-MM-YYYY'),
            seats: seatCount
        }
        let history = [] as TripSearchParams[]
        const historyJson = localStorage.getItem('search-history')
        if (historyJson) {
            history = JSON.parse(historyJson) as TripSearchParams[]
        }
        history.unshift(historyEntry)
        localStorage.setItem('search-history', JSON.stringify(history))
        navigate(`/reserve/from/${fromLocation?.place_id}/to/${toLocation?.place_id}/date/${startDate?.format('DD-MM-YYYY')}`)
    }
    useEffect(() => {
        if (fromLocation && toLocation && startDate && seatCount) {
            setIsFilled(true)
        }
        else {
            setIsFilled(false)
        }
    }, [fromLocation, seatCount, startDate, toLocation])

    if (!cities) return null
    return (
        <Container
            sx={{
                backgroundColor: 'background.paper',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridTemplateRows: {
                    xs: '1fr 1fr 1fr 1fr',
                    md: '1fr 1fr 1fr',
                },
                gridColumnGap: '0.5rem',
                gridRowGap: '0.5rem',
                gridTemplateAreas: {
                    xs:
                        `'from from from from'
                        'to to to to'
                        'date-picker date-picker date-picker seat-select'
                        'search-button search-button search-button search-button'`,
                    md:
                        `'from from to to'
                'date-picker date-picker seat-select seat-select'
                'search-button search-button search-button search-button'`
                }
            }}
        >
            <SearchGoogleMaps sx={{ gridArea: 'from' }} label="from" updateLocation={(newValue) => setFromLocation(newValue)} />
            <SearchGoogleMaps sx={{ gridArea: 'to' }} label="to" updateLocation={(newValue) => setToLocation(newValue)} />
            <DatePicker
                onChange={(newValue) => handleChangeDate(newValue as Dayjs)}
                value={startDate}
                sx={{ gridArea: 'date-picker' }}
            />
            <Select
                IconComponent={SeatIcon}
                sx={{ gridArea: 'seat-select' }}
                value={seatCount.toString()}
                label="Seats"
                onChange={handleChangeSeats}
            >
                {[...Array(5 + 1).keys()].slice(1).map(x => (
                    <MenuItem value={x}>{x}</MenuItem>
                ))}
            </Select>
            <Button sx={{
                gridArea: 'search-button',
                padding: 0,
                height: '100%',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'primary.contrastText'
            }}
                onClick={() => handleSearch()}
                fullWidth
                variant="contained"
                disabled={!isFilled}
            >
                SEARCH
            </Button>
        </Container >
    );
}