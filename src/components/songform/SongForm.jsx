import React, { useState } from 'react'

const SongForm = ({addSong}) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit.bind(this)}>
      <label>Song Name :</label>
      <input type="text" required value={title} onChange={(e)=> {setTitle(e.target.value)}}/>
      <button type="submit">Add Song</button>
    </form>
  )
}

export default SongForm;
