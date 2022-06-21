import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UsaStaes from './components/us_states';
import Cities from './components/cities';
import Shelters from './components/shelters';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UsaStaes />} />
        <Route exact path="/cities" element={<Cities />} />
        <Route exact path="/cities/shelters" element={<Shelters />} />
      </Routes>
    </Router>
  );
}

export default App;
