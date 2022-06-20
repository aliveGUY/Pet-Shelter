import React from "react";
import { NavLink } from "react-router-dom";
import { leaveShelter } from "../redux/us_states/current_us_state";
import { useDispatch } from "react-redux";

const Shelters = () => {
  const dispatch = useDispatch()
  return(
  <div>
    <NavLink to="/cities" onClick={() => dispatch(leaveShelter())}>Back</NavLink>
    <h1>Shelters</h1>
  </div>
)}

export default Shelters;