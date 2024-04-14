import React from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent.jsx';
import logo from '../images/logo.svg'

const Header = () => {
  const headerStyles = {
    backgroundColor: '#07131f',
    padding: '27px 120px',
    width: '100%',
    marginBottom: '20px',
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles = {
    width: '164px',
    height: '36px',
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <Link to="/" className="header-logo" style={logoStyles}>
          <img
            src={logo}
            style={logoStyles}
            alt="Логотип сайта по поиску фильмов"
          />
        </Link>
        <SearchComponent />
      </div>
    </header>
  );
};

export default Header;
