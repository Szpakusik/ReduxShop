import React from 'react';
import homeContent from './homeContent.module.scss';
import StepCard from './stepCard/StepCard'
import { connect } from 'react-redux';
import { cardData } from '../../utils/content/cardData'
import CreateAccount from '../CreateAccount/CreateAccount';


const HomeContent = (props) => {

    // const handleMenuClick = () => {
    //     props.showSidebar( true );
    // }

    return(
        <>
        
            <div className={`container w-100 text-center p-4 mb-5 ${homeContent.homeContent}`}>
                <p className="h5 mb-4">Mieszkasz w gminie Morawica?</p>
                <p className="h2 text-success m-0 mt-4 text-uppercase">Dostarczymy Twoje zakupy pod same drzwi!</p>
                <img src={require('./../../images/logo-z-dowozem3.png')} alt="" className="mt-3"/>
                <p className="h5 my-4">w 3 prostych krokach:</p>

                <div className="row mt-5 text-center">

                    <StepCard data={ cardData[0] }/>
                    <StepCard data={ cardData[1] } />
                    <StepCard data={ cardData[2] } />

                </div>

                <CreateAccount />

                
                <div className="row w-100 mb-5 mx-auto">

                    <div className={`col-md-3 col-12 ${homeContent.icon}`}>
                        <span className="material-icons">
                            reply
                        </span>
                    </div>

                    <div className="text-center text-md-right h2 my-3 text-dark col-12 col-md-9">
                        Albo wybierz kategorię... <br />
                        
                        <button className={`btn btn-outline-success my-3 bg-wood d-md-none mx-auto d-block`}>
                            <span className="material-icons pt-1">
                                menu
                            </span>
                        </button>

                        i zacznij  
                        <span className="text-success"> bez zakładania konta</span>!
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

const mapDispatchToProps = ( dispatch ) => {
    return{
        showSidebar: ( status )=>{
            dispatch( { type:"SHOW_SIDEBAR", status: status } )
        },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent)