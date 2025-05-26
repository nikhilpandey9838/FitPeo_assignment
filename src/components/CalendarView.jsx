import React from "react";
import { appointments } from "../data/appointments";
import arrowLeft from '../assets/calendar.svg';
import arrowRight from '../assets/statistics.svg';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3 className="calendar-title">October 2021</h3>
        <div className="calendar-controls">
          <button className="calendar-control prev">
            <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>&larr;</span>
          </button>
          <button className="calendar-control next">
            <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>&rarr;</span>
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days">
          <div className="day-column">
            <div className="day-name">Mon</div>
            <div className="day-number">25</div>
            <div className="time-slot">10:00</div>
            <div className="time-slot">11:00</div>
            <div className="time-slot">12:00</div>
          </div>

          <div className="day-column">
            <div className="day-name">Tues</div>
            <div className="day-number">26</div>
            <div className="time-slot">08:00</div>
            <div className="time-slot selected">09:00</div>
            <div className="time-slot">10:00</div>
          </div>

          <div className="day-column">
            <div className="day-name">Wed</div>
            <div className="day-number">27</div>
            <div className="time-slot">12:00</div>
            <div className="time-slot"><span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>-</span></div>
            <div className="time-slot">13:00</div>
          </div>

          <div className="day-column">
            <div className="day-name">Thurs</div>
            <div className="day-number active">28</div>
            <div className="time-slot">10:00</div>
            <div className="time-slot selected-grey">11:00</div>
            <div className="time-slot"><span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>-</span></div>
          </div>

          <div className="day-column">
            <div className="day-name">Fri</div>
            <div className="day-number">29</div>
            <div className="time-slot"><span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>-</span></div>
            <div className="time-slot">14:00</div>
            <div className="time-slot">16:00</div>
          </div>

          <div className="day-column attach-left">
            <div className="day-name">Sat</div>
            <div className="day-number">30</div>
            <div className="time-slot combined-grey-left">12:00</div>
            <div className="time-slot">14:00</div>
            <div className="time-slot">15:00</div>
          </div>

          <div className="day-column attach-right">
            <div className="day-name">Sun</div>
            <div className="day-number">31</div>
            <div className="time-slot combined-grey-right">09:00</div>
            <div className="time-slot">10:00</div>
            <div className="time-slot">11:00</div>
          </div>
        </div>
      </div>

      <div className="appointment-cards">
        {appointments.currentDay.map((appointment, index) => (
          <div
            key={index}
            className={`appointment-card ${appointment.highlighted ? "highlighted" : ""}`}
          >
            <div className="appointment-header">
              <h4 className="appointment-title">{appointment.title}</h4>
              <img
                src={appointment.icon}
                alt={appointment.title}
                className="appointment-icon"
              />
            </div>
            <div className="appointment-time">{appointment.time}</div>
            {appointment.doctor && (
              <div className="appointment-doctor">{appointment.doctor}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
