import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { resetCart } from '../../Redux';
import Estimate from '../Estimate/Estimate';
import ShippingAddress from '../ShippingAddress/ShippingAddress';

const Checkout = () => {
    const cart = useSelector(state => state.cartItems.carts)
    const [shippingInfo, setShippingInfo] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleOrderConfirm = () => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        const {name, phone, address} = shippingInfo;
        
        const orderInfo = {
            totalOrder: cart.length,
            time: new Date(),
            billingName: user.name,
            shippingName:name,
            email: user.email,
            phone:phone,
            address:address,
            amount: grandTotal
        };

        const requestOptions = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo)
        }

        fetch("https://calm-mountain-62998.herokuapp.com/order", requestOptions)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal({ text: "Order confirmed successfully" })
                    dispatch(resetCart())
                    history.push("/cart-items")
                }
            })
    }

    return (
        <div className="checkout">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ShippingAddress setShippingInfo={setShippingInfo}></ShippingAddress>
                    </div>
                    <div className="col-md-6">
                        <h5 className="mt-5">Your order</h5>
                        <hr />
                        <Estimate total={total} shipping={shipping} taxt={taxt} grandTotal={grandTotal}>
                            {

                                shippingInfo ?
                                    <button onClick={() => handleOrderConfirm()} className="btn btn-success w-100">Confirm order</button>
                                    :
                                    <button className="btn btn-secondary w-100" disabled>Place order</button>
                            }
                        </Estimate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;