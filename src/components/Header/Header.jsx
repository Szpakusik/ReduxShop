import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <div className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header p-0">
        <div className='container-fluid p-0 overflow-hidden'>
          <Navbar.Brand className={`banner navbar-header col-sm-4 ${headerStyles.banner}`}>
            <a className="navbar-brand" href="https://www.gatsbyjs.org/">
              <i class="material-icons">
                local_mall
              </i>  
              <p className='mb-0'>Spożywczy24h</p>
            </a>
          </Navbar.Brand>
          <div className="col-sm-5 "></div>
          <Nav className={`navbar-nav ml-auto col-sm-3 ${headerStyles.koszyk}`}>
            <a className="dropdown nav-item nav-link p-0" key="2" href="mailto:alexviveropelaez@gmail.com">
              <div className="row">
                <span class="material-icons col-sm-3">
                  shopping_cart
                </span>
                <p className='align-middle col-sm-6 my-auto h5 font-weight-bold'>Koszyk ( 2 ) <span>14.75zł</span></p>
              </div>
            </a>
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
