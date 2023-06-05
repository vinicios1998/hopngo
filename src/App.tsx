import './App.css';
import Home from './pages/Home/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationList from './features/NavigationList';
import ReviewTrip from './pages/ReviewTrip';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ConfirmTrip from './pages/ConfirmTrip';
import PublishTrip from './pages/PublishTrip';
import ReviewPublish from './pages/ReviewPublish';
import { useState } from 'react';
import LoginScreen from './features/Auth/LoginScreen';
import RegisterUserScreen from './features/Auth/RegisterUserScreen';
import { CssBaseline } from '@mui/material';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const updateToken = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
  }
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="/login" element={<LoginScreen updateToken={updateToken} />} />
          <Route path="/register" element={<RegisterUserScreen />} />
          <Route path="/reserve" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/publish/from/:from/to/:to/date/:date" element={
            <ProtectedRoute>
              <ReviewPublish />
            </ProtectedRoute>
          } />
          <Route path="/publish" element={<PublishTrip />} />
          <Route path="/reserve/from/:from/to/:to/date/:date" element={<ProtectedRoute>
            <NavigationList />
          </ProtectedRoute>} />
          <Route path="/reserve/from/:from/to/:to/trip/:idTrip" element={<ProtectedRoute>
            <ReviewTrip />
          </ProtectedRoute>} />
          <Route path="/reserve/from/:from/to/:to/trip/:idTrip/confirmation" element={<ProtectedRoute>
            <ConfirmTrip />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>

  );
}

export default App;
