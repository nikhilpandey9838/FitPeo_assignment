import React from "react";
import heartIcon from '../assets/heart.svg';
import lungsIcon from '../assets/lungs.svg';
import teethIcon from '../assets/teeth.svg';
import boneIcon from '../assets/bone.svg';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-illustration">
        <img
          src={'/anatomy image.png'}
          alt="Human anatomy illustration"
          className="anatomy-image"
        />

        {/* Health indicators would be positioned absolutely over the image */}
        <div className="health-indicator heart">
          <div className="indicator-dot green"></div>
          <span className="indicator-text">Heart</span>
        </div>

        <div className="health-indicator bone">
          <div className="indicator-dot green"></div>
          <span className="indicator-text">Bone</span>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
