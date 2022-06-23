import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { states } from './STATES_DATA'
import { pickState } from '../redux/usStates/ShareState'
import EastIcon from '@mui/icons-material/East'

const UsaStaes = () => {
  const dispatch = useDispatch()
  return (
    <div className="States-page">
      <div className="States-Headline">
        <img src={require(`../img/Cat.png`)} alt="Cat" />
        <div className="States-Headline-Titles"></div>
      </div>
      <h3 className="MidSection-Title">Pick state</h3>
      <div>
        <div className="States-wrapper">
          {states.map((state, i) => (
            <div key={i} className="State">
              <NavLink
                to="/cities"
                onClick={() =>
                  dispatch(
                    pickState({
                      state: state.slice(0, 2),
                      state_full: state.slice(4),
                    }),
                  )
                }
              >
                <div id="State-img-wrapper">
                  <img
                    className="State-image"
                    src={require(`../img/${state.slice(0, 2)}.png`)}
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
  )
}

export default UsaStaes
