import React from 'react';
import homeContent from './homeContent.module.scss';
import StepCard from './stepCard/StepCard'
import { connect } from 'react-redux';
import { cardData } from '../../utils/content/cardData'


const HomeContent = (props) => {

    return(
        <>
        
            <div className={`container w-100 text-center p-4 mb-3 ${homeContent.homeContent}`}>
                <p className="h1 text-success m-0 mt-4 text-uppercase">Dostarczymy Twoje zakupy pod same drzwi!</p>
                <p className="h5 my-4">w 3 prostych krokach:</p>

                <div className="row mt-5 text-center">

                    <StepCard data={ cardData[0] }/>
                    <StepCard />
                    <StepCard />

                </div>

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