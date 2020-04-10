import React from 'react';
import homeContent from './homeContent.module.scss';
import StepCard from './stepCard/StepCard'
import { connect } from 'react-redux';
import { cardData } from '../../utils/content/cardData'


const HomeContent = (props) => {

    return(
        <>
        
            <div className={`container w-100 text-center p-4 mb-5 ${homeContent.homeContent}`}>
                <p className="h5 mb-4">Mieszkasz w gminie Morawica?</p>
                <p className="h1 text-success m-0 mt-4 text-uppercase">Dostarczymy Twoje zakupy pod same drzwi!</p>
                <img src={require('./../../images/logo-z-dowozem.png')} alt="" className="mt-3"/>
                <p className="h5 my-4">w 3 prostych krokach:</p>

                <div className="row mt-5 text-center">

                    <StepCard data={ cardData[0] }/>
                    <StepCard data={ cardData[1] } />
                    <StepCard data={ cardData[2] } />

                </div>

                <div className={`row my-5 p-5 pl-0 ${homeContent.registerSection}`}>

                    <div className="text-left h1 my-3 text-dark">
                        Zarejestruj się już teraz... <br /> i zgarnij <span className="text-success">2 darmowe dostawy</span>!
                    </div>

                </div>

            </div>
            

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