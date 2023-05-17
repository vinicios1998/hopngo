import './App.css';
import Home from './features/Home/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationList from './features/NavigationList';
import ReviewTrip from './features/ReviewTrip';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/from/:from/to/:to/date/:date" element={<NavigationList />} />
          <Route path="/from/:from/to/:to/trip/:idTrip" element={<ReviewTrip />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>

  );
}

export default App;
