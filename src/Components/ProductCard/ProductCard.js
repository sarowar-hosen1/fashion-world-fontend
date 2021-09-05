import React from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart, addToWish } from "../../Redux/index";
import swal from "sweetalert";
import './ProductCard.scss'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const history = useHistory()
    const handleProductDetails = (id) => {
        history.push(`/product/${id}`)
    }


    const hanldeAddCart = (product) => {
        dispatch(addToCart(product))
        swal({ text: "Product added to cart", })
    }


    const handleAddWish = (product) => {
        dispatch(addToWish(product))
        swal({ text: "Product added to wish list" })
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