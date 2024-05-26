import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <div className={`main-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <MainContent />
        <Sidebar isOpen={sidebarOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
