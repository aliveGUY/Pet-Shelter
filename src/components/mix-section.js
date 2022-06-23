import { Routes, Route, NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { unpickState } from '../redux/usStates/ShareState';
import Shelters from './shelters';
import Towns from './cities';

const MidSection = () => {
  const staeCODE = useSelector((state) => state.shareState);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to={-1} onClick={() => dispatch(unpickState())}>
        <ArrowBackIosIcon className="IosIcon" />
      </NavLink>
      <div className="Cities-Healine">
        <div className="Cities-IMG-wrapper">
          <img
            className="Cities-Image"
            src={
              /* eslint-disable */ 
              require(`../img/${staeCODE.state}.png`)
              /* eslint-enable */
            }
            alt="state"
          />
        </div>

        <div className="Cities-Headline-Title">
          <h1>{staeCODE.picked ? staeCODE.city : staeCODE.state_full}</h1>
        </div>
      </div>
      <h3 className="MidSection-Title">
        {!staeCODE.picked
          ? 'Adoptable pets by city'
          : 'All pets by local shelters'}
      </h3>
      <Routes>
        <Route exact path="/" element={<Towns />} />
        <Route exact path="/shelters" element={<Shelters />} />
      </Routes>
    </div>
  );
};

export default MidSection;
