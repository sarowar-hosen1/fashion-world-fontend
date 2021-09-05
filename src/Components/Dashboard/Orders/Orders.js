import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { orderDelete, orderFailure, orderRequest, orderSuccess } from '../../../Redux/order/orderAction';
import "./Orders.scss";



const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.order);

    useEffect(() => {
        dispatch(orderRequest())
        fetch("https://calm-mountain-62998.herokuapp.com/my-orders")
            .then(res => res.json())
            .then(result => {
                dispatch(orderSuccess(result))
            })
            .catch(error => {
                dispatch(orderFailure(error))
            })
    }, []);

    const handleDeleteOrder = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(`https://calm-mountain-62998.herokuapp.com/delete-order/${id}`, requestOptions)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal({ text: "Delete Successfully", })
                    dispatch(orderDelete(id))
                }
            })
    }


    return (
        <div className="order-wrapper">
            <div className="table-responsive">
                <table className="table table-borderless table-striped">
                    <thead className="thead">
                        <tr>
                            <th>SL</th>
                            <th>Order#</th>
                            <th>Purchased On</th>
                            <th>Billing name</th>
                            <th>Shipping name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order._id}</td>
                                    <td>{new Date(Date.parse(order.time)).toLocaleDateString()}</td>
                                    <td>{order.billingName}</td>
                                    <td>{order.shippingName}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.address}</td>
                                    <td>&#2547;{order.amount}</td>
                                    <td>
                                        <Button onClick={() => swal({ text: "View not available" })} variant="contained" color="primary" component="span">
                                            View
                                        </Button>
                                    </td>
                                    <td
                                        onClick={() => handleDeleteOrder(order._id)}
                                        className="text-danger"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <DeleteIcon />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;