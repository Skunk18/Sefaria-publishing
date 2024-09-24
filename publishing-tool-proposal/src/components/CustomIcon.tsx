import React from 'react';
import iconConfig from '../iconConfig'; // Import the icon configuration file

interface CustomIconProps {
  type: keyof typeof iconConfig; // Icon type from the configuration file
  className?: string; // Allow additional class names
}

const CustomIcon: React.FC<CustomIconProps> = ({ type, className = '' }) => {
  const iconDetails = iconConfig[type];

  if (!iconDetails) {
    console.error(`Icon type "${type}" not found in iconConfig.`);
    return null;
  }

  try {
    // Use the require statement to dynamically import the SVG icon
    const Icon = require(`../icons/${iconDetails.name}.svg`).default;
    return (
      <Icon
        className={`slide-icon ${className}`}
        width={iconDetails.size || 24}
        height={iconDetails.size || 24}
        fill={iconDetails.color || '#000'}
      />
    );
  } catch (error) {
    console.error(`Icon "${iconDetails.name}" not found. Make sure the SVG is in the src/icons directory.`);
    return null;
  }
};

export default CustomIcon;
