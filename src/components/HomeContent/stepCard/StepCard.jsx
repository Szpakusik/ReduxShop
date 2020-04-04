import React from 'react';
import stepCard from './stepCard.module.scss';

import { connect } from 'react-redux';

const StepCard = (props) => {

    return(
        <>

                    <div className={`col-md-4 ${stepCard.card}`}>

                        <div className="card m-1 p-4">
                            <div className={`row rounded-circle border  ${stepCard.circle} mx-auto my-4`}>
                               <p className="h1 self-align-center m-auto"> 1 </p>
                            </div>
                            
                            <div className="text-center ">
                                <p className="h3 text-success"> Short description </p>
                            </div>

                            <div className="">
                                <p className={`${stepCard.p}`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa reprehenderit voluptate nesciunt laudantium quaerat amet quis velit eaque! Impedit temporibus, minus quisquam necessitatibus quo esse voluptate maiores nemo earum repellendus? </p>
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