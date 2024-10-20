import { useState } from 'react';
import './App.css';
import MiddleContent from './todomains.jsx'; 
import SideWindow from './sidewindow.jsx'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <SideWindow sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MiddleContent sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default App;
