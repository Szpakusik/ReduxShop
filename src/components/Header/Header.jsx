import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <div className="navbar navbar-light navbar-expand-lg navbar-fixed-top sticky-header p-0">
        <div className='container-fluid p-0 overflow-hidden'>
          <Navbar.Brand className={`banner navbar-header col-sm-4 ${headerStyles.banner}`}>
            <a className="navbar-brand" href="https://www.gatsbyjs.org/">
              <i class="material-icons">
                local_mall
              </i>  
              <p className='mb-0'>Spożywczy24h</p>
            </a>
          </Navbar.Brand>
          <div className="col-sm-4 "></div>
          <Nav className={`navbar-nav ml-auto col-sm-4 text-dark ${headerStyles.koszyk}`}>
            <div className="col-sm-1">
              <span class="material-icons">
                shopping_cart
              </span>
            </div>
            <p className='align-middle col-sm-7 my-auto h6 font-weight-bold text-dark'>Koszyk (2) <span>14.75zł</span></p>
            <div className="col-sm-4 text-dark text-right p-0 border-left my-auto">
              <p className="m-0 float-right pl-2">Twoje konto</p>
              <i class="material-icons text-dark p-0 float-right">
                person
              </i>
            </div>
          </Nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
