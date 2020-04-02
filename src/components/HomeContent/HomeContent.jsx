import React from 'react';
import homeContent from './homeContent.module.scss';
import { connect } from 'react-redux';

const HomeContent = (props) => {

    return(
        <>
        
            <div className={`container w-100 text-center p-4 mb-3 ${homeContent.homeContent}`}>
                <p className="h1 text-success m-0 text-uppercase">Dowóz zakupów na terenie gminy Morawica do 2h!</p>
            </div>
                <div className="h-100 w-100"></div>

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