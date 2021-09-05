import React from 'react';
import "./Estimate.scss"

const Estimate = ({total, shipping, taxt, grandTotal, children}) => {

    

    return (
        <div className="summery">
            <h6 className="text-center">SUMMERY</h6>
            <div>
                <h6>Subtotal: </h6>
                <p>&#2547; {total}</p>
            </div>
            <div>
                <h6>Shipping: </h6>
                <p>&#2547; {shipping}</p>
            </div>
            <div>
                <h6>Vat: </h6>
                <p>&#2547; {taxt}</p>
            </div>
            <hr />
            <div>
                <h6>Total:</h6>
                <p>&#2547; {grandTotal}</p>
            </div>
            {
                children
            }
        </div>
    );
};

export default Estimate;