import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EastIcon from '@mui/icons-material/East';
import states from './STATES_DATA';
import { pickState } from '../redux/usStates/ShareState';

const UsaStaes = () => {
  const dispatch = useDispatch();
  return (
    <div className="States-page">
      <div className="States-Headline">
        <img
          src={
          /* eslint-disable */ 
          require('../img/Cat.png')
          /* eslint-enable */
          }
          alt="Cat"
        />
        <div className="States-Headline-Titles" />
      </div>
      <h3 className="MidSection-Title">Pick state</h3>
      <div>
        <div className="States-wrapper">
          {states.map((state) => (
            <div key={Date.now() + Math.random()} className="State">
              <NavLink
                to="/cities"
                onClick={() => dispatch(
                  pickState({
                    state: state.slice(0, 2),
                    state_full: state.slice(4),
                  }),
                )}
              >
                <div id="State-img-wrapper">
                  <img
                    className="State-image"
                    src={
                      /* eslint-disable */ 
                      require(`../img/${state.slice(0, 2)}.png`)
                    /* eslint-enable */}
                    alt="state"
                  />
                </div>
                <div className="State-text">
                  <EastIcon className="IosIcon-circle" />
                  <p>{state.slice(5)}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsaStaes;
