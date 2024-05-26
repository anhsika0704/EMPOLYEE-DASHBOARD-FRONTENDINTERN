import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString([], options);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString([], options);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="datetime">
        <div className="date">{formatDate(currentTime)}</div>
        <div className="time">{formatTime(currentTime)}</div>
      </div>
      <div className="images">
      <img src="/assets/ds.jpg"  />
      </div>
    </aside>
  );
};

export default Sidebar;
