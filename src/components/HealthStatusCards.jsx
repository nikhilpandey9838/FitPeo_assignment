import React from "react";
import { healthData } from "../data/healthData";

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <div className="card-icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <div className="card-title">{item.name}</div>
          </div>
          <div className="card-date">{item.date}</div>
          <div className="card-status">
            <div className={`status-indicator ${item.status}`}></div>
            <div className="status-bar">
              <div
                className={`status-progress ${item.status}`}
                style={{ width: `${item.statusPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      <div className="health-details">
        <button className="details-button" style={{display: 'inline-flex', alignItems: 'center'}}>
          Details
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft: '0.3em'}} xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3l4 4-4 4" stroke="#3B3F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthStatusCards;
