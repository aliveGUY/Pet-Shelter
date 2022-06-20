import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import UsaStaes from './components/us_states';
import Cities from './components/cities';
import Shelters from './components/shelters';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getState } from './redux/us_states/current_us_state';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getState());
  })
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
