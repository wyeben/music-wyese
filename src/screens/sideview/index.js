import React, { useState, useEffect } from 'react';
import SideButton from './SideButton';
import './sidebar.css';
import {MdFavorite} from 'react-icons/md';
import {FaGripfire, FaPlay} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa';
import {IoLibrary} from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../Spotify';


export default function Sidebar() {
  const [image, setImage] = useState(
    ''
  )
  useEffect(() => {
    apiClient.get('me').then(response =>{
      const imageUrl = response.data.images[0]?.url || '';
      setImage(imageUrl);
    });
  },[]);
  return (
    <div className='sidebar-container'>
      <img src={image} 
      className='profile-img' alt='profile'/>
      <div>
        <SideButton title='Feed' to='/feed' icon={<MdSpaceDashboard/>}/>
        <SideButton title='Trending' to='/trending' icon={<FaGripfire/>}/>
        <SideButton title='Player' to='/player' icon={<FaPlay/>}/>
        <SideButton title='Favorites' to='/favorites' icon={<MdFavorite/>}/>
        <SideButton title='Library' to='/' icon={<IoLibrary/>}/>
      </div>
      <SideButton title='Sign Out' to='' icon={<FaSignOutAlt/>}/>
    </div>
  );
}
