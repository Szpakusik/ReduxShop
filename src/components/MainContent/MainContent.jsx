import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import mainContent from './mainContent.module.scss'

const MainContent = ( props ) => {
  
  return(
    <>
    <div className={`container text-dark p-3 ${mainContent.mainContent} `}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <div className="clearfix"></div>
        <div className="row">
          <Footer />
        </div>
    </div>
    
    </>
  )
};

export default MainContent;
