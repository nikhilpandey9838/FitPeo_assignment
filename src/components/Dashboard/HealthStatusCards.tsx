import React from "react";
import { healthData } from "../../data/healthData";

const HealthStatusCards: React.FC = () => {
  return (
    <div className="flex relative flex-col self-stretch my-auto max-md:mt-10">
      {healthData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center px-0.5 py-px mt-1.5 bg-black bg-opacity-0"
        >
          <div className="flex flex-col items-start px-3.5 py-4 w-full rounded-3xl bg-slate-50">
            <div className="flex gap-3 text-xs whitespace-nowrap text-slate-400">
              <img
                src={item.icon}
                className="object-contain shrink-0 aspect-[0.93] w-[26px]"
                alt={item.name}
              />
              <div className="my-auto">{item.name}</div>
            </div>
            <div className="mt-3.5 text-xs text-zinc-200">{item.date}</div>
            <img
              src={item.statusImage}
              className="object-contain self-stretch mt-3 w-full aspect-[15.63]"
              alt={`${item.name} status`}
            />
          </div>
        </div>
      ))}

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dbc257facc2c214366fcc2d718ac263f9e05f14?placeholderIfAbsent=true&apiKey=d845f3eec3594576a497175b463e7a24"
        className="object-contain mt-2 aspect-[1.39] w-[142px]"
        alt="Health status indicator"
      />

      <div className="self-end mt-3.5 text-xs text-slate-300 max-md:mr-1.5">
        Details
      </div>
    </div>
  );
};

export default HealthStatusCards;
