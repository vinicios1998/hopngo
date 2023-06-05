import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/service';

interface ILoginScreenProps {
    updateToken: (token: string) => void
}
const LoginScreen = ({ updateToken }: ILoginScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const navigation = useNavigate()

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleClickNewAccount = () => {
        navigation('/register')
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const token = await login({ email, password })
        if (token) {
            updateToken(token)
            navigation('/')
        }
        else setError(true)
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Typography variant="h2" color={'primary'} align="center" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    margin="normal"
                />
                <Button sx={{ padding: '1rem' }} type="submit" variant="contained" color="primary" fullWidth>
                    Sign In
                </Button>
                <Button sx={{ margin: '1rem 0' }} type="button" variant="outlined" color="secondary" onClick={handleClickNewAccount} fullWidth>
                    Create new account
                </Button>
                {error && <Typography color={'error'} variant='subtitle1'>{'Error, user not found'}</Typography>}
            </form>
        </Container>
    );
};

export default LoginScreen;