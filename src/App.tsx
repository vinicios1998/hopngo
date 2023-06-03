import './App.css';
import Home from './pages/Home/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationList from './features/NavigationList';
import ReviewTrip from './pages/ReviewTrip';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConfirmTrip from './pages/ConfirmTrip';
import PublishTrip from './pages/PublishTrip';
import ReviewPublish from './pages/ReviewPublish';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Home />} />
          <Route path="/publish/from/:from/to/:to/date/:date" element={<ReviewPublish />} />
          <Route path="/publish" element={<PublishTrip />} />
          <Route path="/reserve/from/:from/to/:to/date/:date" element={<NavigationList />} />
          <Route path="/reserve/from/:from/to/:to/trip/:idTrip" element={<ReviewTrip />} />
          <Route path="/reserve/from/:from/to/:to/trip/:idTrip/confirmation" element={<ConfirmTrip />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>

  );
}

export default App;
