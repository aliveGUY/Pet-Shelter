import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Shelters = () => {
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  let shelters
  if (!usState[0].loads) {
    shelters = usState.filter((item) => item.contact.address.city === staeCODE.city)
  }
  return (
    <div>
      <NavLink to="/cities">Back</NavLink>
      <h1>Shelters</h1>
      <ul>
        {usState[0].loads
          ? 'Finding for you new friend'
          : shelters.map((shelter, i) => (
              <li key={i}>
                <NavLink to="/">
                  <div className="Shelter-Card">
                    <img
                      src={
                        !shelter.primary_photo_cropped
                          ? require('./logo.png')
                          : shelter.primary_photo_cropped.small
                      }
                      alt="Avatar"
                    />
                    <div>
                      <h4 className="Shelter-title">
                        {shelter.name} the {shelter.species}
                      </h4>
                      <p>{shelter.description}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Shelters
