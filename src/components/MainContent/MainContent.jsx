import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import mainContent from './mainContent.module.scss'
import footerCss from '../Footer/footer.module.scss'
import { connect } from 'react-redux';
import { showContent } from '../../utils/functions/contentFunctions';
import axios from 'axios';
import { serverUrl } from '../../utils/content/url';

const MainContent = ( props ) => {

  const handleClick = () => {
    props.showSidebar( false );
  };

  useEffect(() => {

    axios.get( serverUrl + '/product', {})
    .then(function (response) {
        // console.log(response);
        props.getAllProducts(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
    
  }, [])

  useEffect(() => {
    document.getElementById('scrollDiv').scrollTo(0, 0)
  })

  return(
    <>
    <div id="scrollDiv" className={`container mr-0 text-dark pb-0 p-4 col-12 col-md-11 ${mainContent.mainContent}`} onClick={ ()=>{ handleClick() } }>
      
      { props.activeCategory === 0 ? showContent(props.activePage) : null }
      { 

        props.products.length > 0 && props.activeCategory !== 0 &&

        props.products.map( ( product )=>{
        
          if( (product.category === props.activeCategory || props.activeCategory === -1) && product.name.toLowerCase().includes( props.searchString.toLowerCase() ) )
            return <Product key={product.id} product={product} />
        
        })

      }

      <div className="clearfix" />
      <div className={`w-100 ${footerCss.container} d-none`}>
        <Footer />
      </div>
    </div>  

    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.productReducer.products,
    searchString: state.productReducer.searchString,
    cart: state.cartReducer.products,
    activeCategory: state.categoryReducer.activeCategory,
    categories: state.categoryReducer.categories,
    activePage: state.pageReducer.activePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAllProducts: ( data )=>{ dispatch( { type: "GET_PRODUCTS", data: data } ) },
    showSidebar: ( status )=>{
      dispatch( { type:"SHOW_SIDEBAR", status: status } )
    },
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
