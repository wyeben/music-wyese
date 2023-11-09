import React from 'react';
import './SideButton.css';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';

export default function SideButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  const btnClass = isActive ? 'btn-body active' : 'btn-body';
  return (
    <Link to={props.to}>
      <div className= {btnClass}>
        <IconContext.Provider value={{size: "24px", className: 'btn-icon'}}>
        {props.icon}
        <p className='btn-title'>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
