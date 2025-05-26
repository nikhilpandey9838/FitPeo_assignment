import React from "react";
import searchIcon from '../assets/search.svg';
import notificationIcon from '../assets/notification.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <div className="search-bar">
          <img
            src={searchIcon}
            alt="Search"
            className="search-icon"
          />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <img
          src={notificationIcon}
          alt="Notifications"
          className="notification-icon"
          style={{marginLeft: '1em', verticalAlign: 'middle'}}
        />
      </div>
      <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
        <button style={{width: 36, height: 36, borderRadius: 10, background: '#06e0fa', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontSize: 22, cursor: 'pointer'}}>
          <span role="img" aria-label="profile">🧑‍🎤</span>
        </button>
        <button style={{width: 36, height: 36, borderRadius: 10, background: '#3B3F8C', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontSize: 22, color: '#fff', cursor: 'pointer'}}>
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
