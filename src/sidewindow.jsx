import React, { useState } from 'react';
import './App.css';

function SideWindow() {
  const [sidebar, setSidebar] = useState(false);
  const [activeView, setActiveView] = useState(''); // Dodaj stan do zarządzania aktywnym widokiem

  const showSidebar = () => setSidebar(!sidebar);

  const renderContent = () => {
    // Funkcja do renderowania widoku w zależności od aktywnego widoku
    switch (activeView) {
      case 'Upcoming':
        return <div>Upcoming tasks go here</div>;
      case 'Today':
        return <div>Today's tasks go here</div>;
      case 'Late':
        return <div>Late tasks go here</div>;
      case 'Statistics':
        return <div>Statistics view</div>;
      case 'Calendar':
        return <div>Calendar view</div>;
      case 'Notes':
        return <div>Notes view</div>;
      default:
        return <div>Select a view from the menu</div>;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar i przycisk */}
      <button className={sidebar ? 'toggle-sidebar-button active' : 'toggle-sidebar-button'} onClick={showSidebar}>
        {sidebar ? 'Zamknij Sidebar' : 'Otwórz Sidebar'}
      </button>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={() => setActiveView('Upcoming')}>
            <span>Upcoming</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Today')}>
            <span>Today</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Late')}>
            <span>Late</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Statistics')}>
            <span>Statistics</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Calendar')}>
            <span>Calendar</span>
          </li>
          <li className="navbar-toggle" onClick={() => setActiveView('Notes')}>
            <span>Notes</span>
          </li>
        </ul>
      </nav>

      {/* Zawartość po prawej stronie */}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default SideWindow;
