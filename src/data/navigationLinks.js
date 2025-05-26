import dashboardIcon from '../assets/dashboard.svg';
import historyIcon from '../assets/history.svg';
import calendarIcon from '../assets/calendar.svg';
import appointmentsIcon from '../assets/appointments.svg';
import statisticsIcon from '../assets/statistics.svg';
import chatIcon from '../assets/chat.svg';
import supportIcon from '../assets/support.svg';

export const navigationLinks = {
  general: [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      active: true,
    },
    {
      name: "History",
      icon: historyIcon,
      active: false,
    },
    {
      name: "Calendar",
      icon: calendarIcon,
      active: false,
    },
    {
      name: "Appointments",
      icon: appointmentsIcon,
      active: false,
    },
    {
      name: "Statistics",
      icon: statisticsIcon,
      active: false,
    },
  ],
  tools: [
    {
      name: "Chat",
      icon: chatIcon,
      active: false,
    },
    {
      name: "Support",
      icon: supportIcon,
      active: false,
    },
  ],
};
