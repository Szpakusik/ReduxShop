import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import mainContent from './mainContent.module.scss'
import footerCss from '../Footer/Footer.module.scss'
import { connect } from 'react-redux';
import { showContent } from '../../utils/functions/contentFunctions';
import axios from 'axios'

const MainContent = ( props ) => {

  useEffect(() => {

        axios.get('http://localhost:3000/product', {})
        .then(function (response) {
            // console.log(response);
            props.getAllProducts(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

  }, [])

  return(
    <>
    <div className={`container mr-0 text-dark pb-0 p-3 col-md-11 ${mainContent.mainContent}`}>
      
      {
        props.activeCategory === 0 ? showContent(props.activePage)

        : null
      }
      { 
        props.products.length > 0 && props.activeCategory !== 0 &&
        props.products.map( ( product )=>{
        
          if(product.category === props.activeCategory)
            return <Product product={product} />
        
        })
      }

      <div className="clearfix" />
      <div className={`w-100 ${footerCss.container}`}>
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
    activePage: state.pageReducer.activePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAllProducts: ( data )=>{ dispatch( { type: "GET_PRODUCTS", data: data } ) }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
