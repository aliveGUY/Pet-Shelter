import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getState } from '../redux/usCities/UScities'
import { useEffect } from 'react'

const Cities = () => {
  const dispatch = useDispatch()
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  useEffect(() => {
    dispatch(getState(staeCODE))
  }, [])
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <h1>{usState[0].loads ? 'Entering State...' : 'Cities'}</h1>
      <ul>
        {usState[0].loads
          ? ''
          : usState.map((item, i) => (
              <li key={i}>
                <NavLink to="/cities/shelters">
                  {item.contact.address.city} {item.contact.address.state}
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Cities
