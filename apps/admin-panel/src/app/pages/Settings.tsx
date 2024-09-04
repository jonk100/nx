// apps/admin-panel/src/app/pages/Settings.tsx
import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you might want to save the user's preference to local storage or server
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>
      {/* You can add more settings options here */}
    </div>
  );
};

export default Settings;
