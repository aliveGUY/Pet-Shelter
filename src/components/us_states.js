import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { states } from './STATES_DATA'
import { pickState } from '../redux/usStates/ShareState'

const UsaStaes = () => {
  const dispatch = useDispatch()
  return (
    <div className="States-page">
      <h1>Pick State</h1>
      <div>
        <div className="States-wrapper">
          {states.map((state, i) => (
            <div key={i} className="State">
              <NavLink
                to="/cities"
                onClick={() =>
                  dispatch(pickState({ state: state.slice(0, 2), city: null }))
                }
              >
                <img
                  className="State-image"
                  src={require(`../img/${state.slice(0, 2)}.png`)}
                  alt="state"
                />
                <p className="State-text">{state.slice(5)}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UsaStaes
