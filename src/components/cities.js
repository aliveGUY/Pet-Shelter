import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { enterShelter } from '../redux/us_states/current_us_state'

const Cities = () => {
  const dispatch = useDispatch()
  const usState = useSelector((state) => state.states)
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <h1>{usState[0].loads ? 'Loading...' : 'Cities'}</h1>
      <ul>
        {usState[0].loads
          ? ''
          : usState.map((item, i) => (
              <li key={i}>
                <NavLink to="/cities/shelters" onClick={() => dispatch(enterShelter())}>
                  {item.contact.address.city} {item.contact.address.state}
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Cities
