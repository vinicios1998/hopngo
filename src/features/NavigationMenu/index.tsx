import * as React from 'react';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Person2Icon from '@mui/icons-material/Person2';
import NavigationButton from '../../components/navigationButton';
import ForumIcon from '@mui/icons-material/Forum';
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function NavigationMenu() {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                position: 'fixed',
                bottom: 0,
                backgroundColor: 'primary.light',
                borderRadius: '1rem 1rem 0 0',
                padding: {
                    xs: '0.5rem',
                    lg: '0.3rem'
                }
            }}>
            <NavigationButton icon={<SearchIcon />} label={'Search'} isActive />
            <NavigationButton icon={<AddCircleOutlineIcon />} label={'Publish'} />
            <NavigationButton icon={<Logo style={{ opacity: '0.5' }} height={'3rem'} />} />
            <NavigationButton icon={<Person2Icon />} label={'Messages'} />
            <NavigationButton icon={<ForumIcon />} label={'Profile'} />

        </Container>
    );
}