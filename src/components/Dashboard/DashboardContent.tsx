import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardContent: React.FC = () => {
  return (
    <div className="flex gap-5 w-full max-md:flex-col">
      <div className="w-[52%] max-md:w-full">
        <DashboardOverview />
      </div>
      <div className="w-[48%] max-md:w-full">
        <div className="grow w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex relative flex-col items-start py-9 pr-px pl-3.5 w-full min-h-[690px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe12994e30302dfe1770faeba1183885ac4d52f?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
              className="object-cover absolute inset-0 size-full"
              alt="Calendar background"
            />
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
