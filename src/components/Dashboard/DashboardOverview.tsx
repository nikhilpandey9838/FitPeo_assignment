import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview: React.FC = () => {
  return (
    <div className="grow w-full bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex relative flex-col items-center px-1 pt-0.5 pb-10 w-full min-h-[690px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/253baa33b99bad00ab4ed9b513851bf925a8bbbd?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
          className="object-cover absolute inset-0 size-full"
          alt="Dashboard background"
        />

        {/* Search Bar */}
        <div className="relative self-stretch pt-7 pb-1 w-full text-xs whitespace-nowrap bg-black bg-opacity-0 text-slate-300 max-md:max-w-full">
          <div className="flex gap-1 px-4 pt-2 pb-0.5 bg-black bg-opacity-0">
            <div className="flex flex-col grow shrink-0 justify-center px-1.5 py-1 basis-0 bg-black bg-opacity-0 w-fit">
              <div className="flex gap-3.5 px-5 py-3 bg-white rounded">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80884dda096cc505a26252580a7392ec7c2371ec?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt="Search icon"
                />
                <div className="flex-auto my-auto w-[323px]">Search</div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1594f16f7d3f47e446fd5bc1eba38960a87d0ee9?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
              className="object-contain shrink-0 self-start w-9 aspect-[0.95]"
              alt="Notification"
            />
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="flex relative gap-5 justify-between mt-5 max-w-full w-[421px]">
          <div className="text-xl font-medium text-slate-500">Dashboard</div>
          <div className="my-auto text-xs text-slate-300">This Week</div>
        </div>

        {/* Main Content */}
        <div className="relative mt-2 max-w-full w-[430px]" space={23}>
          <div className="flex gap-5 max-md:flex-col max-md:">
            <div className="w-[65%] max-md:ml-0 max-md:w-full">
              <AnatomySection />
            </div>
            <div className="ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <HealthStatusCards />
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardOverview;
