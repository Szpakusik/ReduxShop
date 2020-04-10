import React from 'react';
import stepCard from './stepCard.module.scss';

import { connect } from 'react-redux';

const StepCard = (props) => {

    return(
        <>

                    <div className={`col-md-4 ${stepCard.col}`}>

                        <div className={`card m-1 ${stepCard.card}`}>
                            <div className={`row mx-auto`}>
                               <img src={require(`./../../../images/${props.data.photo}`)} className="img-responsive w-100" />
                            </div>
                            
                            <div className="text-center px-2 py-3 bg-light">
                                <p className="h3 mb-0 text-success"> {props.data.shortDesc} </p>
                            </div>

                            <div className="">
                                <p className={`${stepCard.p} m-3`}> {props.data.longDesc} </p>
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

export default connect(mapStateToProps)(StepCard)