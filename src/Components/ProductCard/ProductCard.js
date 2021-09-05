import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, addToWish } from "../../Redux/index";
import './ProductCard.scss'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    // const cart = useSelector(state => state.cartItems.carts);
    // console.log(cart);

    const history = useHistory()
    const handleProductDetails = (id) => {
        history.push(`/product/${id}`)
    }


    const hanldeAddCart = (product) => {
        dispatch(addToCart(product))
    }


    const handleAddWish = (product) => {
        dispatch(addToWish(product))
    }


    return (
        <div className='col-md-3 col-sm-6 col-6'>
            <div className="product-card">
                {
                    product.image ?
                        <img onClick={() => handleProductDetails(product._id)} src={product.image && product.image[0]} alt="" />
                        :
                        <img onClick={() => handleProductDetails(product._id)} src={`data:image/jpeg;base64,${product.binaryImg}`} alt="" />

                }
                <h6 className="mt-3">{product.name}</h6>
                <span>&#2547;</span><span className="text-muted">{product.price}</span>
                <div className="cart-btn">
                    <i onClick={() => handleAddWish(product)} className="far fa-heart"></i>
                    <br />
                    <i onClick={() => hanldeAddCart(product)} className="fal fa-cart-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;