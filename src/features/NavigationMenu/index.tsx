import * as React from 'react';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Person2Icon from '@mui/icons-material/Person2';
import NavigationButton from '../../components/navigationButton';
import ForumIcon from '@mui/icons-material/Forum';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Menus } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface INavigationMenuProps {
    currentPage: Menus
}
export default function NavigationMenu({ currentPage }: INavigationMenuProps) {
    const navigate = useNavigate()
    return (
        <Container disableGutters maxWidth={false} >
            <Container
                disableGutters maxWidth={false}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    position: 'fixed',
                    bottom: 0,
                    backgroundColor: 'primary.main',
                    padding: {
                        xs: '0.5rem',
                        lg: '0.3rem'
                    },
                }}>
                <NavigationButton icon={<SearchIcon />} label={'Search'} isActive={currentPage === Menus.SEARCH} onClick={() => navigate("/")} />
                <NavigationButton icon={<AddCircleOutlineIcon />} label={'Publish'} isActive={currentPage === Menus.PUBLISH} onClick={() => navigate("/publish")} />
                <NavigationButton icon={<Logo style={{ opacity: '0.5' }} height={'3rem'} />} />
                <NavigationButton icon={<Person2Icon />} label={'Messages'} isActive={currentPage === Menus.MESSAGES} />
                <NavigationButton icon={<ForumIcon />} label={'Profile'} isActive={currentPage === Menus.PROFILE} />

            </Container>
        </Container >
    );
}