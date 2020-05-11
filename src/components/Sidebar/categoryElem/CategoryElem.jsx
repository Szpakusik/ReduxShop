import React, { useState } from 'react';
import PropTypes from 'prop-types';

import categoryElem from './categoryElem.module.scss';



const CategoryElem = ( props ) => {
    // let borderRight = props.category.active ? "bg-white" : 'border-right';
    let isFullWidth='';

    if( props.lp % 2 === 0 && props.lp+1 === props.length) isFullWidth = "w-100" 

    return(
        <>
            <a href="#" onClick={props.onClickFun} className={`d-none text-decoration-none`}>
                <div className={`row ${props.activeTab === props.category.id ? categoryElem.active : ''} ${categoryElem.categoryElem}`}>
                    <div className="m-auto text-center">
                        <span className="material-icons">
                            {props.category.icon}
                        </span>
                        <p className='d-block m-0'>{props.category.name}</p>
                    </div>
                </div>
            </a>

            <a href="#" onClick={props.onClickFun} className={`${categoryElem.categoryElem} ${isFullWidth} p-1 text-decoration-none pt-2 d-flex`}>
                    <div className="text-center m-auto">
                        <span className="material-icons">
                            {props.category.icon}
                        </span>
                        <p className='d-block m-0'>{props.category.name}</p>
                    </div>
            </a>
        </>
    )
};

export default CategoryElem;
