import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="simple-card-header">
        <h4 className="simple-card-title">{title}</h4>
        <img src={icon} alt={title} className="simple-card-icon" />
      </div>
      <div className="simple-card-time">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
