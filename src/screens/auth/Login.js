import React from 'react';
import { loginEndpoint } from '../../Spotify';
import './Login.css';

export default function Login() {
  return (
     <div className='login-page'>
        <img 
        src='../src/doc/Images/adrian-korte-5gn2soeAc40-unsplash'
        alt='longin-spotify'
        className='logon'></img>
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
        </a>
     </div>
  )
}
