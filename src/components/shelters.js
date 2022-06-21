import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Shelters = () => {
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  let shelters
  if (!usState[0].loads) {
    shelters = usState.filter((item) => item.contact.address.state === staeCODE)
  }
  return (
    <div>
      <NavLink to="/cities">Back</NavLink>
      <h1>Shelters</h1>
      <ul>
        {usState[0].loads
          ? 'Finding for you new friend'
          : shelters.map((shelter, i) => {
              console.log(
                !shelter.primary_photo_cropped
                  ? '#'
                  : shelter.primary_photo_cropped.small,
              )
              return (
                <li key={i}>
                  <NavLink to="/">
                    <div>
                      <img
                        src={
                          !shelter.primary_photo_cropped
                            ? '#'
                            : shelter.primary_photo_cropped.small
                        }
                        alt="Avatar"
                      />
                      <h4>
                        {shelter.name} the {shelter.species}
                      </h4>
                    </div>
                  </NavLink>
                </li>
              )
            })}
      </ul>
    </div>
  )
}

export default Shelters
