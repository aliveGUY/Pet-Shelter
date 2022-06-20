import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { enterState } from '../redux/us_states/current_us_state';

const UsaStaes = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.states)
  const a = !state[0].loads
  return (
    <div>
      <h1>{!a ? 'Loading...' : 'Pick State'}</h1>
      <div>
        <ul>
          {!a ? '' : state.map((state, i) => (
            <li key={i}>
              <NavLink to="/cities" onClick={() => dispatch(enterState(state.contact.address.state))}>
              {state.contact.address.state} {state.contact.address.city} 
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsaStaes
