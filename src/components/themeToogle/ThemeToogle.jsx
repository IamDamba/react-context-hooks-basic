import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToogle = () => {
  const { toogleTheme } = useContext(ThemeContext)
  const handleClick = ()=>{
    toogleTheme();
  }

  return (
    <button onClick={handleClick}>
      Toogler the theme
    </button>
  )
}

export default ThemeToogle;
