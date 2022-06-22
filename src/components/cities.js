import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getState } from '../redux/usCities/UScities'
import { useEffect } from 'react'
import { pickState } from '../redux/usStates/ShareState'

const Cities = () => {
  const dispatch = useDispatch()
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  useEffect(() => {
    dispatch(getState(staeCODE.state))
  }, [])
  let count = []
  let cities = []
  if (!usState[0].loads) {
    let stack = []
    cities = usState.filter((item) => {
      if (stack.includes(item.contact.address.city)) {
        count[stack.indexOf(item.contact.address.city)] += 1;
      } else {
        stack.push(item.contact.address.city)
        count[stack.indexOf(item.contact.address.city)] = 1
        return item
      }
    })
  }
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <h1>{!usState[0].loads ? 'Cities' : 'Entering State...'}</h1>
      <div>
        {usState[0].loads
          ? ''
          : cities.map((item, i) => (
              <div key={i} className="Cities-wrapper">
                <NavLink
                className="City"
                  to="/cities/shelters"
                  onClick={() =>
                    dispatch(
                      pickState({
                        city: item.contact.address.city,
                        state: item.contact.address.state,
                      }),
                    )
                  }
                >
                  ({count[i]}) {item.contact.address.state} {item.contact.address.city}
                </NavLink>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Cities
