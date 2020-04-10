import React, { useState } from 'react';
import PropTypes from 'prop-types';

import categoryElem from './CategoryElem.module.scss';



const CategoryElem = ( props ) => {


    let borderRight = props.category.active ? "bg-white" : 'border-right';

    return(
            <a href="#" onClick={props.onClickFun} className={`text-decoration-none col-xs-2`}>
                <div className={`row ${props.activeTab === props.category.id ? categoryElem.active : ''} ${categoryElem.categoryElem}`}>
                    <div className="m-auto text-center">
                        <span className="material-icons">
                            {props.category.icon}
                        </span>
                        <p className='d-block m-0'>{props.category.name}</p>
                    </div>
                </div>
            </a>
    )
};

export default CategoryElem;
