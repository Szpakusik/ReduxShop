import React from 'react';
import homeContent from './homeContent.module.scss';
import { connect } from 'react-redux';

const HomeContent = (props) => {

    return(
        <>
        
            <h1>HOMEPAGE</h1>

        </>
    )

}

const mapStateToProps = (state) => {
    return{
        products: state.productReducer.products,
        activeCategory: state.categoryReducer.activeCategory,
    }
}

export default connect(mapStateToProps)(HomeContent)