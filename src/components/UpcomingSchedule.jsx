import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { appointments } from "../data/appointments";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>

      <div className="schedule-section">
        <h4 className="schedule-day">On Thursday</h4>
        <div className="appointment-list">
          {appointments.thursday.map((appointment, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
            />
          ))}
        </div>
      </div>

      <div className="schedule-section">
        <h4 className="schedule-day">On Saturday</h4>
        <div className="appointment-list">
          {appointments.saturday.map((appointment, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
