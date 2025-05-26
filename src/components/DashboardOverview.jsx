import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <span className="dashboard-period" style={{ fontSize: '0.9em', fontWeight: 400, display: 'inline-flex', alignItems: 'center' }}>
          This Week
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginLeft: '0.3em'}} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6l4 4 4-4" stroke="#3B3F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </span>
      </div>

      <div className="overview-content">
        <div className="anatomy-container">
          <AnatomySection />
        </div>
        <div className="health-status-container">
          <HealthStatusCards />
        </div>
      </div>

      <ActivityFeed />
    </div>
  );
};

export default DashboardOverview;
