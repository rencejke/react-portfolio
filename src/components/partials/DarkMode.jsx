import React, { useState, useEffect } from 'react';
import { CiSun } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} id="toggle">
      {isDarkMode ? <CiSun /> : <FaMoon />}
    </button>
  );
};

export default DarkMode;