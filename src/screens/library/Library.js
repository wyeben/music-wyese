import React, { useEffect, useState } from 'react';
import APIKit, { setClientToken } from '../../Spotify';
import './Library.css';

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

    setClientToken(accessToken);

    APIKit.get('me/playlists')
      .then(function (response) {
        console.log('API Response:', response);
        setPlaylists(response.data.items || []);
      })
      .catch(function (error) {
        console.error('API Request Error:', error);
      });
  }, []);

  return (
    <div className='screen-container'>
      <div className='library-body'>
        {playlists.map((playlist) => (
          <div className='playlist-card' key={playlist.id}>
            {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
}
