import React from 'react';
import iconConfig from '../iconConfig'; // Ensure correct import path

interface CustomIconProps {
  type: keyof typeof iconConfig; // Icon type from the configuration file
  className?: string; // Optional class name for additional styling
}

const CustomIcon: React.FC<CustomIconProps> = ({ type, className = '' }) => {
  const iconDetails = iconConfig[type];

  if (!iconDetails) {
    console.error(`Icon type "${String(type)}" not found in iconConfig.`);
    return <span className={`slide-icon ${className}`}>?</span>; // Fallback if icon type not found
  }

  try {
    // Dynamically import the SVG component based on the iconConfig name
    const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = require(`../icons/${iconDetails.name}.svg`).default;

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
    return <span className={`slide-icon ${className}`}>?</span>; // Fallback if SVG file is not found
  }
};

export default CustomIcon;
