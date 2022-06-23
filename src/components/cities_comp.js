import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getStates_US } from '../redux/usCities/UScities'
import { pickState } from '../redux/usStates/ShareState'

const Towns = () => {
  const dispatch = useDispatch()
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  useEffect(() => {
    dispatch(getStates_US(staeCODE.state))
  }, [])
  let count = []
  let cities = []
  if (!usState[0].loads) {
    let stack = []
    cities = usState.filter((item) => {
      if (stack.includes(item.contact.address.city)) {
        count[stack.indexOf(item.contact.address.city)] += 1
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
                        state_full: staeCODE.state_full,
                        state: staeCODE.state,
                      }),
                    )
                  }
                >
                  <div className="Cities-Carf-Info">
                    <p className="Cities-Card-Title">
                      {item.contact.address.city}
                    </p>
                    <p className="Cities-Card-Count">{count[i]}</p>
                    <p>{staeCODE.state_full}</p>
                  </div>
                </NavLink>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Towns
