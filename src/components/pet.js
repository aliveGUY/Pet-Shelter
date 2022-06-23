import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PetPage = () => {
  const petInfo = useSelector((state) => state.pets)
  console.log(petInfo.photos.length === 0)
  return (
    <div>
      <NavLink to="/cities/shelters">Back</NavLink>
      <div>
        <div className="PetPage-Headline">
          <div className="PetPage-Headline-IMG-Wrapper">
            <img
              src={
                !petInfo.primary_photo_cropped
                  ? require('../img/logo.png')
                  : petInfo.primary_photo_cropped.small
              }
              alt="Avatar"
            />
          </div>
          <div className="PetPage-Headline-Info">
            <h1>{petInfo.name}</h1>
          </div>
        </div>
        <h2>{petInfo.contact.phone}</h2>
        <div>
          {petInfo.photos.length === 0
            ? ''
            : petInfo.photos.map((phto, i) => (
                <div className="PetPage-Images">
                  <img key={i} src={phto.small} alt="pet" />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default PetPage
