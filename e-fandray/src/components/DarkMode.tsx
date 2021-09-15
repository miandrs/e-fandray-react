import React, { useState, useEffect } from "react";
import Toggle from 'react-toggle';
const DarkMode:React.FC = () => {
  const [isDark, setDark] = useState<boolean>(true);
  
  return (
    <Toggle className="dark-mode-toggle" 
    checked={isDark} 
    onChange={({ target }) => setDark(target.checked)} 
    icons={{ checked: "🌛", unchecked: "🌞" }} 
    aria-label="Dark mode toggle" />   
  );  
};
export {
  DarkMode
} 