import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const PetPage = () => {
  const petInfo = useSelector((state) => state.pets)
  const published = new Date(petInfo.published_at)
  const updated = new Date(petInfo.published_at)
  console.log(petInfo)
  return (
    <div>
      <NavLink to={-1}>
        <ArrowBackIosIcon className="IosIcon" />
      </NavLink>
      <div>
        <div className="PetPage-Headline">
          <div className="PetPage-Headline-Info">
            <h1>{petInfo.name}</h1>
            <h3>
              {petInfo.breeds.primary}
              {petInfo.breeds.secondary
                ? ` mixed with ${petInfo.breeds.secondary}`
                : ''}
            </h3>
            <h3>{petInfo.status}</h3>
            <p className="PetPage-Date">Published: {`${published.getHours()}:${published.getMinutes()} ${published.getDate()}/${published.getMonth()}/${published.getFullYear()}`}</p>
            <p className="PetPage-Date">Last update: {`${updated.getHours()}:${updated.getMinutes()} ${updated.getDate()}/${updated.getMonth()}/${updated.getFullYear()}`}</p>
          </div>
        </div>
        <div className="PetImages-scroll">
          <div className="PetImages-Container">
            {petInfo.photos.length === 0
              ? ''
              : petInfo.photos.map((phto, i) => (
                  <div key={i} className="PetPage-Images">
                    <img src={phto.large} alt="pet" />
                  </div>
                ))}
          </div>
        </div>
        <h3 className="MidSection-Title">Pet Info:</h3>
        <div className="PetPage-Info">
          <p>Age: {petInfo.age}</p>
          <p>Gender: {petInfo.gender}</p>
          <p>Size: {petInfo.size ? petInfo.size : '*empty*'}</p>
          <p>
            Primary color:{' '}
            {petInfo.colors.primary ? petInfo.colors.primary : '*empty*'}
          </p>
          <p>
            Secondary colors:{' '}
            {petInfo.colors.secondary ? petInfo.colors.secondary : '*empty*'}
          </p>
          <p>
            Description: {petInfo.description ? petInfo.description : '*empty*'}
          </p>

          <h3>Address</h3>
          <p>
            address 1: {petInfo.contact.address.address1},{' '}
            {petInfo.contact.address.city}, {petInfo.contact.address.state}{' '}
            {petInfo.contact.address.postcode},{' '}
            {petInfo.contact.address.country}
          </p>
          <p>
            address 2:{' '}
            {petInfo.contact.address.address2
              ? `${petInfo.contact.address.address2}, ${petInfo.contact.address.city}, ${petInfo.contact.address.state} ${petInfo.contact.address.postcode}, ${petInfo.contact.address.country}`
              : '*empty*'}
          </p>
          <h3>Contact</h3>
          <p>Email {petInfo.contact.email}</p>
          <p>Phone {petInfo.contact.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default PetPage
