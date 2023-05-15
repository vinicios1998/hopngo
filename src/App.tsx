import './App.css';
import Home from './Home/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationList from './features/NavigationList';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <Home /> */}
        <NavigationList />
      </div>
    </LocalizationProvider>

  );
}

export default App;
