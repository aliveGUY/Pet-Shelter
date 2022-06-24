import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EastIcon from '@mui/icons-material/East';
import { pickPet } from '../redux/pets/pet_redux';

const Shelters = () => {
  const usState = useSelector((state) => state.states);
  const staeCODE = useSelector((state) => state.shareState);
  const dispatch = useDispatch();
  let shelters;
  if (!usState[0].loads) {
    shelters = usState.filter(
      (item) => item.contact.address.city === staeCODE.city,
    );
  }
  return (
    <div>
      <ul className="Shelters">
        {shelters.map((shelter) => (
          <li key={Date.now() + Math.random()}>
            <NavLink
              to="/cities/shelters/pet"
              onClick={() => dispatch(pickPet(shelter))}
            >
              <div className="Shelter-Card">
                <div className="Shelter-Image-Wrapper">
                  <img
                    src={
                      !shelter.primary_photo_cropped
                      /* eslint-disable */ 
                        ? require('../img/logo.png')
                        /* eslint-enable */
                        : shelter.primary_photo_cropped.small
                    }
                    alt="Avatar"
                  />
                </div>
                <div className="Shelter-Info">
                  <h4 className="Shelter-title">{shelter.name}</h4>
                  <p>
                    {shelter.distance}
                    {' '}
                    km away
                  </p>
                  <p>
                    {shelter.breeds.primary}
                    {shelter.breeds.secondary
                      ? ` mixed with ${shelter.breeds.secondary}`
                      : ''}
                  </p>
                </div>
                <EastIcon className="IosIcon-circle" />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shelters;
