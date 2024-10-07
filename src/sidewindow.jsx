import React, { useState } from 'react';
import './App.css';

function SideWindow() {
  const [sidebar, setSidebar] = useState(false);

  // Funkcja do zmiany stanu sidebara
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Przycisk zewnętrzny do sterowania sidebarem */}
      <button className="toggle-sidebar-button" onClick={showSidebar}>
        {sidebar ? 'Zamknij Sidebar' : 'Otwórz Sidebar'}
      </button>

      {/* Nawigacja */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <span>Menu 1</span>
          </li>
          <li className='navbar-toggle'>
            <span>Menu 2</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideWindow;
