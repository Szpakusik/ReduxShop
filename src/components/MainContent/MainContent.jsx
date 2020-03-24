import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import mainContent from './mainContent.module.scss'
import footerCss from '../Footer/Footer.module.scss'

import { connect } from 'react-redux';

const MainContent = ( props ) => {
  console.log( props.products )
  return(
    <>
    <div className={`container text-dark pb-0 p-3 ${mainContent.mainContent}`}>

      { props.products && props.products.map( ( product )=>{
      
        return <Product product={product} />
      
      })}

{/*         
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
        <Product /> */}
        <div className="clearfix" />
        <div className={`row ${footerCss.container}`}>
          <Footer />
        </div>
    </div>
    
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.someReducer.products
  }
}

export default connect(mapStateToProps)(MainContent);
