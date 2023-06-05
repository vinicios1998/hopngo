import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { NewUserDto } from '../../types/types';
import { createNewUser } from '../../service/service';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigate()

    const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSurname(e.target.value);
    };

    const handleBioChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setBio(e.target.value);
    };

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const userDto: NewUserDto = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            bio: bio
        }
        const result = await createNewUser(userDto)
        if (result.sucess) {
            navigation('/')
        }
        else {
            setMessage(result?.message || '')
        }
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <TextField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Surname"
                    type="text"
                    value={surname}
                    onChange={handleSurnameChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Bio"
                    type="text"
                    value={bio}
                    onChange={handleBioChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign Up
                </Button>
                <Typography color={'error'} variant='subtitle1'>{message}</Typography>
            </form>
        </Container>
    );
};

export default RegisterScreen;