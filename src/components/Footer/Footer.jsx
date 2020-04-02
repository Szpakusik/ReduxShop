import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => (
  <footer className={`footer bg-dark ${footerStyles.footer} w-100`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <p>#ZostańWDomu</p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;
