import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md"
import "./Cart.scss";
import { useHistory } from 'react-router-dom';
import { removeFromCart } from "../../Redux/index";
import Estimate from '../Estimate/Estimate';

const Cart = () => {
    const history = useHistory()
    const cart = useSelector(state => state.cartItems.carts);
    const dispatch = useDispatch();

    //subtotal 
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const items = cart[i];
        const num = parseFloat(items.price);
        total = total + num
    }

    //shipping
    let shipping = 80;
    if (total === 0) {
        shipping = 0
    } else if (total < 3000) {
        shipping = 50
    } else if (total > 3000) {
        shipping = 30
    }

    //vat
    const taxt = parseFloat((total / 50).toFixed(2));

    //Grand total
    const grandTotal = total + shipping + taxt;

    return (
        <div className="cart">
            <div className="container">
                <h3>Your cart items</h3>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        {
                            cart.length ?
                                <table className="table">
                                    <tbody>
                                        {
                                            cart.map((crt) =>
                                                <tr mt-5>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img src={crt.image[0]} alt="" />
                                                            <h6>{crt.name}</h6>
                                                        </div>
                                                    </td>
                                                    <td> &#2547; {crt.price}</td>
                                                    <td><strong>Qnt :</strong> 1</td>
                                                    <td> &#2547; {crt.price}</td>
                                                    <td onClick={() => dispatch(removeFromCart(crt._id))}><MdDelete /></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>

                                :
                                <>
                                    <p className="mt-5 text-danger">Cart items empty</p>
                                    <button onClick={() => history.push("/")} className="btn btn-dark mt-5">SHOP NOW</button>
                                </>
                        }
                    </div>

                    <div className="col-md-4">
                        <Estimate total={total} shipping={shipping} taxt={taxt} grandTotal={grandTotal}>
                            {
                                cart.length ?
                                    <button onClick={() => history.push("/checkout")} className="btn btn-secondary w-100">Procced to checkout</button>
                                    :
                                    <button className="btn btn-secondary w-100" disabled>Procced to checkout</button>
                            }
                        </Estimate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;