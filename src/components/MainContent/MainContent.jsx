import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import mainContent from './mainContent.module.scss'
import footerCss from '../Footer/footer.module.scss'
import { connect } from 'react-redux';
import { showContent } from '../../utils/functions/contentFunctions'

const MainContent = ( props ) => {
  console.log( props.products )
  return(
    <>
    <div className={`container mr-0 text-dark pb-0 p-3 col-md-11 ${mainContent.mainContent}`}>

      {
        props.activeCategory === 0 ? showContent(props.activePage)

        : null
      }
      { 
        props.products && props.activeCategory !== 0 &&
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

export default connect(mapStateToProps)(MainContent);
