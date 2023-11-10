import React, { useEffect, useState } from 'react';
import APIKit, { setClientToken } from '../../Spotify';
import './Library.css';

export default function Library() {

  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    // const accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
    const accessToken = JSON.stringify(localStorage.getItem("token"));
    console.log('Access Token:', accessToken);

    setClientToken(accessToken);
  APIKit.get('me/playlists').then(function(response) {
    console.log('API Response:', response);

    setPlaylists(response.data.items);
    console.log("response --> ",response.data);
    console.log(response.data.items);
  })
  .catch(function (error) {
    console.error('API Request Error:', error);
  });
  },[]);
  return( <div className='screen-container'>
    <div className='library-body'>
    {playlists?.map((playlist) => (
      <div className='playlist-card' key={playlist.id}>{playlist.name}</div>
    ))}
    </div>
  </div>
);
  
}
