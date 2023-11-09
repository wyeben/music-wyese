import React, { useEffect, useState } from 'react';
import APIKit from '../../Spotify';
import './Library';

export default function Library() {

  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
  APIKit.get('me/playlists').then(function(response) {
    setPlaylists(response.data.items);
    console.log(response.data.items);
  });
  },[]);
  return <div className='screen-container'>
    <div className='library-body'>
    {playlists?.map((playlist) => (
      <div className='playlist-card'>{playlist.name}</div>
    ))}
    </div>
  </div>;

  
}
