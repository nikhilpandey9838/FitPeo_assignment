import React from "react";
import { navigationLinks } from "../data/navigationLinks";
import supportIcon from '../assets/support.svg';
import settingSoftIcon from '../assets/setting-soft.svg';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <span className="logo-health">Health</span>
        <span className="logo-care">care.</span>
      </div>

      <div className="nav-section">
        <h3 className="nav-title">General</h3>
        <ul className="nav-list">
          {navigationLinks.general.map((link, index) => (
            <li
              key={index}
              className={`nav-item ${link.active ? "active" : ""}`}
            >
              <img src={link.icon} alt={link.name} className="nav-icon" />
              <span className="nav-text">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section">
        <h3 className="nav-title">Tools</h3>
        <ul className="nav-list">
          {navigationLinks.tools.map((link, index) => (
            <li
              key={index}
              className={`nav-item ${link.active ? "active" : ""}`}
            >
              <img src={link.icon} alt={link.name} className="nav-icon" />
              <span className="nav-text">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="settings-section">
        <div className="nav-item">
          <img
            src={settingSoftIcon}
            alt="Settings"
            className="nav-icon"
          />
          <span className="nav-text">Setting</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
