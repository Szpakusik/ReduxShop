import React, { useState } from 'react';
import PropTypes from 'prop-types';
import product from './product.module.scss';



const Product = ( props ) => {
  return(

    <div className={`container card col-md-2 border text-dark float-left text-center ${product.product}`}>
        <img class="card-img-top" src={require("./../../images/mleko.jpg")} alt="Product" />
        <p class="card-title font-weight-bold m-0">Mleko Łaciate</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                
                <div className="row">
                    <div className="col-sm-6 px-2">4.59</div>
                    <div className="col-sm-6 px-2 text">100g</div>                   
                </div>

            </li>
            <li class="list-group-item">
                <button>Dodaj do koszyka</button>
            </li>
        </ul>
    </div>

  )
};

export default Product;
