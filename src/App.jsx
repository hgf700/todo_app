import { useState } from 'react';
import './App.css';
import SideWindow from './sidewindow.jsx';
import Todomain from './todomains.jsx';
import Calendar from './calendar.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('TodoApp');

  return (
    <div className="app-container">
      <SideWindow 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        setActiveView={setActiveView} 
      />
      
      <div className={`middle-content ${sidebarOpen ? 'reduced-width' : ''}`}>
        {/* Conditionally render TodoApp or Calendar based on activeView */}
        {activeView === 'TodoApp' ? (
          <Todomain />
        ) : activeView === 'Calendar' ? (
          <Calendar />
        ) : null}
      </div>
    </div>
  );
}

export default App;
