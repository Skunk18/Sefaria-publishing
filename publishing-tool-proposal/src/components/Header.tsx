import { ReactComponent as GentlyLogo } from '../icons/gently-logo.svg';
import { ReactComponent as SefariaLogo } from '../icons/sefaria-logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <GentlyLogo className="logo" /> {/* Use SVG as a component */}
      </div>
      <h1 className="title">Sefaria & Gently Ventures JV: Product Incubator</h1>
      <div className="logo-container">
        <SefariaLogo className="logo" /> {/* Use SVG as a component */}
      </div>
    </header>
  );
};

export default Header;
