import React, { useState } from 'react';
import PropTypes from 'prop-types';
import product from './product.module.scss';
import { connect } from 'react-redux';



const Product = ( props ) => {
    
    const [productAmount, setAmount] = useState(1);

    const correctPrice = (Math.round(props.product.price * 100) / 100).toFixed(2);
    const handleClick = ()=>{

        const amount = productAmount ? +productAmount : 1;
        props.product.amount = amount;
        props.addToCart(props.product)

    }

    const handleChange = (e)=>{
        if(e.currentTarget.value !== "" && e.currentTarget.value < 1){
            e.currentTarget.value=1;
        }
        setAmount(e.currentTarget.value);
    }

  return(

    <div className={`container card col-6 col-sm-4 col-md-3 col-lg-2 text-dark float-left text-center ${product.product}`}>
        <div className={`${product.photoContainer} row my-2`}>
            <img className="card-img-top" src={require(`./../../images/${props.product.photo}`)} alt="Product" />
        </div>
        
        <p className={`card-title font-weight-bold m-0 ${product.title}`}>{props.product.name}</p>
        <ul className="list-group list-group-flush border-0">
            <li className="list-group-item">
                
                <div className="row">
                    <div className="col-12 col-sm-6 px-2 text-secondary">{correctPrice}zł</div>
                    <div className="col-12 col-sm-6 px-2 text-secondary">{props.product.weight}</div>                   
                </div>

            </li>
            <li className="list-group-item">
                <button className="btn btn-outline-success my-1" onClick={ ( ) => { handleClick() }} >Dodaj <span className="d-none d-md-inline">do koszyka</span></button>
                <input placeholder="1" type="number" onBlur={()=>{window.scrollTo(0,0)}} onChange={ (e)=>{handleChange(e)}} className={`${product.numberInput} mt-1 text-center`}/>
            </li>
        </ul>
    </div>

  )
};

const mapStateToProps = (state) => {
    return{
        categories: state.categoryReducer.categories,
    }
}
  
const mapDispatchToProps = (dispatch) => {
        product.amount = 1;
    return{
        addToCart: ( product )=>{ dispatch( { type: "ADD_TO_CART", product: product } ) }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);