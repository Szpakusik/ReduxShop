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
      
      if(product.category === props.activeCategory)
        return <Product product={product} />
      
      })}

        
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
    products: state.productReducer.products,
    cart: state.cartReducer.products,
    activeCategory: state.categoryReducer.activeCategory,
    categories: state.categoryReducer.categories,
  }
}

export default connect(mapStateToProps)(MainContent);
