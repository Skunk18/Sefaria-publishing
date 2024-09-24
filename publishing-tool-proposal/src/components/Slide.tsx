import React from 'react';
import './Slide.css';

interface SlideProps {
  title: string;
  content: string;
  footer?: string; // footer is now optional
}

const Slide: React.FC<SlideProps> = ({ title, content, footer }) => {
  return (
    <div className="slide">
      <h2 className="slide-title">{title}</h2>
      <div className="slide-content">
        {content.split('\n').map((line, index) => (
          <div key={index} className="slide-list-item">
            <span className="slide-icon">✔</span> {/* Replace with your CustomIcon if necessary */}
            <span>{line}</span>
          </div>
        ))}
      </div>
      {footer && <div className="slide-footer">{footer}</div>} {/* Render footer only if it exists */}
    </div>
  );
};

export default Slide;
