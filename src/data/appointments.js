import dentistIcon from '../assets/teeth.svg';
import physiotherapyIcon from '../assets/bone.svg';
import checkupIcon from '../assets/check.svg';
import eyeIcon from '../assets/eye.svg';
import brainIcon from '../assets/brain.svg';
import heartIcon from '../assets/heart.svg';

export const appointments = {
  currentDay: [
    {
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: dentistIcon,
      highlighted: true,
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
      icon: physiotherapyIcon,
      highlighted: false,
    },
  ],
  thursday: [
    {
      title: "Health checkup complete",
      time: "11:00AM",
      icon: checkupIcon,
    },
    {
      title: "Ophthalmologist",
      time: "14:00PM",
      icon: eyeIcon,
    },
  ],
  saturday: [
    {
      title: "Cardiologist",
      time: "12:00AM",
      icon: heartIcon,
    },
    {
      title: "Neurologist",
      time: "16:00PM",
      icon: brainIcon,
    },
  ],
};
