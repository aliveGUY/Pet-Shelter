import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { states } from './STATES_DATA'
import { pickState } from '../redux/usStates/ShareState'

const UsaStaes = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Pick State</h1>
      <div>
        <ul>
          {states.map((state, i) => (
            <li key={i}>
              <NavLink to="/cities" onClick={() => dispatch(pickState(state.slice(0,2)))}>
                {state}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsaStaes
