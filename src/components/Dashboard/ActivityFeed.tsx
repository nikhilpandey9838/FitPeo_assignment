import React from "react";

const ActivityFeed: React.FC = () => {
  return (
    <div className="flex relative flex-col justify-center px-1 py-1.5 mt-3.5 max-w-full bg-black bg-opacity-0 w-[441px]">
      <div className="flex flex-col items-center px-5 py-3.5 w-full rounded-2xl bg-slate-50 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch">
          <div className="text-sm text-slate-400">Activity</div>
          <div className="text-xs text-slate-300">
            3 appointment on this week
          </div>
        </div>

        {/* Activity Chart */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd79854728b85df27bbbdc3e48924333e2bb79ac?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
          className="object-contain mt-3 max-w-full aspect-[5.18] w-[363px]"
          alt="Activity chart"
        />

        {/* Days of Week */}
        <div className="flex gap-5 justify-between items-center mt-2 max-w-full text-xs font-light whitespace-nowrap w-[336px]">
          <div className="self-stretch my-auto text-center text-slate-300">
            Mon
          </div>
          <div className="self-stretch my-auto text-slate-300">Tues</div>
          <div className="self-stretch text-center text-slate-300">Wed</div>
          <div className="self-stretch my-auto text-slate-300">Thurs</div>
          <div className="self-stretch my-auto text-xs text-center text-slate-300">
            Fri
          </div>
          <div className="self-stretch my-auto text-center text-slate-300">
            Sat
          </div>
          <div className="self-stretch my-auto text-center text-slate-300">
            Sun
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
