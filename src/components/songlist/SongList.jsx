import React, { useState } from 'react';
import SongForm from '../songform/SongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'pink + white', id: 1 },
    { title: 'streetcar', id: 2 },
    { title: '3005', id: 3 }
  ])

  const addSong = (title)=>{
    setSongs([...songs, {title, id: songs.length + 1}])
  }

  return (
    <div className="song-list">
      <ul>
        {
          songs.map(song =>(
            <li key={song.id}>{song.title}</li>
          ))
        }
      </ul>
      <SongForm addSong={addSong}/>
    </div>
  )
}

export default SongList;
