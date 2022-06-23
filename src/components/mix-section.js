import { useSelector } from 'react-redux'
import Towns from './cities'
import { Routes, Route } from 'react-router-dom'
import Shelters from './shelters'
import { NavLink } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { unpickState } from '../redux/usStates/ShareState'
import { useDispatch } from 'react-redux'

const MidSection = () => {
  const staeCODE = useSelector((state) => state.shareState)
  const dispatch = useDispatch()
  return (
    <div>
      <NavLink to={-1} onClick={() => dispatch(unpickState())}>
        <ArrowBackIosIcon className="IosIcon" />
      </NavLink>
      <div className="Cities-Healine">
        <div className="Cities-IMG-wrapper">
          <img
            className="Cities-Image"
            src={require(`../img/${staeCODE.state}.png`)}
            alt="state"
          />
        </div>

        <div className="Cities-Headline-Title">
          <h1>{staeCODE.picked ? staeCODE.city : staeCODE.state_full}</h1>
        </div>
      </div>
      <h3 className="MidSection-Title">
        {!staeCODE.picked
          ? 'Adoptable pets by city'
          : 'All pets by local shelters'}
      </h3>
      <Routes>
        <Route exact path="/" element={<Towns />} />
        <Route exact path="/shelters" element={<Shelters />} />
      </Routes>
    </div>
  )
}

export default MidSection
