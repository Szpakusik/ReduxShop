import React, { useState } from 'react';
import PropTypes from 'prop-types';
import product from './product.module.scss';



const Product = ( props ) => {
  return(

    <div className={`container card col-md-2 text-dark float-left text-center ${product.product}`}>
        <div className={`${product.photoContainer} row`}>
            <img class="card-img-top" src={require(`./../../images/${props.product.photo}`)} alt="Product" />
        </div>
        
        <p class={`card-title font-weight-bold m-0 ${product.title}`}>{props.product.name}</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                
                <div className="row">
                    <div className="col-sm-6 px-2 text-secondary">{props.product.price}zł</div>
                    <div className="col-sm-6 px-2 text-secondary">{props.product.weight}</div>                   
                </div>

            </li>
            <li class="list-group-item">
                <button class="btn btn-outline-success my-1" >Dodaj do koszyka</button>
                <input placeholder="1" type="number" className={`${product.numberInput} mt-1 text-center`}/>
            </li>
        </ul>
    </div>

  )
};

export default Product;
