import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getStates_US } from '../redux/usCities/UScities'
import { useEffect } from 'react'
import { pickState } from '../redux/usStates/ShareState'
import Towns from './cities_comp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shelters from './shelters'
const Cities = () => {
  const staeCODE = useSelector((state) => state.shareState)

  return (
    <div>
      <div className="Cities-Healine">
        <div className="Cities-IMG-wrapper">
          <img
            className="Cities-Image"
            src={require(`../img/${staeCODE.state}.png`)}
            alt="state"
          />
        </div>

        <div className="Cities-Headline-Title">
          <h1>{staeCODE.state_full}</h1>
          <p>Counter of shelters</p>
        </div>
      </div>
      <h3> Adoptable pets by city</h3>
      <Routes>
        <Route exact path="/" element={<Towns />} />
        <Route exact path="/shelters" element={<Shelters />} />
      </Routes>
    </div>
  )
}

export default Cities
