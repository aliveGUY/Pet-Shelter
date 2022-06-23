import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { pickPet } from '../redux/pets/pet_redux'
import { useDispatch } from 'react-redux'

const Shelters = () => {
  const usState = useSelector((state) => state.states)
  const staeCODE = useSelector((state) => state.shareState)
  const dispatch = useDispatch()
  let shelters
  if (!usState[0].loads) {
    shelters = usState.filter(
      (item) => item.contact.address.city === staeCODE.city,
    )
  }
  return (
    <div>
      <NavLink to="/cities">Back</NavLink>
      <h1>Shelters</h1>
      <ul className="Shelters">
        {usState[0].loads
          ? 'Finding for you new friend'
          : shelters.map((shelter, i) => (
              <li key={i}>
                <NavLink
                  to="/cities/shelters/pet"
                  onClick={() => dispatch(pickPet(shelter))}
                >
                  <div className="Shelter-Card">
                    <div className="Shelter-Image-Wrapper">
                      <img
                        src={
                          !shelter.primary_photo_cropped
                            ? require('../img/logo.png')
                            : shelter.primary_photo_cropped.small
                        }
                        alt="Avatar"
                      />
                    </div>
                    <div className="Shelter-Info">
                      <h4 className="Shelter-title">{shelter.name}</h4>
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
