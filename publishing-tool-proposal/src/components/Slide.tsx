import React from 'react';
import './Slide.css';
import CustomIcon from './CustomIcon'; // Import your CustomIcon component

interface SlideProps {
  title: string;
  content: string;
  footer?: string; // footer is optional
  iconName?: string; // Optional icon name for custom icons
}

const Slide: React.FC<SlideProps> = ({ title, content, footer, iconName = "defaultIcon" }) => {
  return (
    <div className="slide">
      <div className="slide-header">
        <CustomIcon type={iconName} className="slide-header-icon" /> {/* Use CustomIcon with the passed iconName */}
        <h2 className="slide-title">{title}</h2>
      </div>
      <div className="slide-content">
        {content.split('\n').map((line, index) => (
          <div key={index} className="slide-list-item">
            <CustomIcon type="bulletPoint" className="slide-icon" /> {/* Use a bullet icon for each line */}
            <span>{line}</span>
          </div>
        ))}
      </div>
      {footer && <div className="slide-footer">{footer}</div>} {/* Render footer only if it exists */}
    </div>
  );
};

export default Slide;
