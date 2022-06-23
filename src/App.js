import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UsaStaes from './components/us_states';
import Cities from './components/cities';
import PetPage from './components/pet';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UsaStaes />} />
        <Route exact path="/cities/*" element={<Cities />} />
        <Route exact path="/cities/shelters/pet" element={<PetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
