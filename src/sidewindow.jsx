import React from 'react';
import './sidewindow.css';

function SideWindow({ sidebarOpen, setSidebarOpen, setActiveView }) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="side-container">
      <button 
        className={sidebarOpen ? 'toggle-sidebar-button active' : 'toggle-sidebar-button'}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? 'Zamknij Sidebar' : 'Otwórz Sidebar'}
      </button>

      <nav className={sidebarOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={() => setActiveView('TodoApp')}>
            <span>TodoApp</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Calendar')}>
            <span>Calendar</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideWindow;
