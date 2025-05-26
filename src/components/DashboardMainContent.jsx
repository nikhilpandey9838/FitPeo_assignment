import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <DashboardOverview />
        </div>
        <div className="dashboard-right">
          <div className="calendar-container">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
