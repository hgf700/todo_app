import React, { useState } from 'react'; // Upewnij się, że useState jest importowane
import './sidewindow.css'; 
import Todomain from './todomains.jsx'; 

function SideWindow({ sidebarOpen, setSidebarOpen }) {
  const [activeView, setActiveView] = useState(''); // Stan aktywnego widoku

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'TodoApp':
        return <Todomain />;
      case 'Calendar':
        return <div>calendar a view from the menu</div>;

    }
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

      <div className={sidebarOpen ? 'content content-reduced' : 'content'}>
        {renderContent()}
      </div>
    </div>
  );
}

export default SideWindow;
