import React from 'react';
import GentlyLogo from '../icons/gently-logo.svg'; // Import as a component
import SefariaLogo from '../icons/sefaria-logo.svg'; // Import as a component
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <GentlyLogo className="logo" /> {/* Correct usage as component */}
      </div>
      <h1 className="title">Sefaria + Gently Ventures JV: Product Incubator</h1>
      <div className="logo-container">
        <SefariaLogo className="logo" /> {/* Correct usage as component */}
      </div>
    </header>
  );
};

export default Header;