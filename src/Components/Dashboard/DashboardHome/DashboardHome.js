import React from 'react';
import DashboardChart from '../DashboardChart/DashboardChart';
import { LocalMall, AttachMoney, ShoppingCart } from '@material-ui/icons';
import {useSelector} from "react-redux";
import "./DashboardHome.scss";

const DashboardFeature = () => {
    const products = useSelector(state => state.myProducts.products);
    const order = useSelector(state => state.order.order);

    return (
        <div className="dashboard-home">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-card 1">
                            <div>
                                <h5>Total Products</h5>
                                <h3>{products.length}</h3>
                            </div>
                            <div>
                                <LocalMall />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card 2">
                            <div>
                                <h5>Total Order</h5>
                                <h3>{order.length}</h3>
                            </div>
                            <div>
                                <ShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card 3">
                            <div>
                                <h5>Total Sells</h5>
                                <h3>{order.length}</h3>
                            </div>
                            <div>
                                <AttachMoney />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-chart">
                    <h6 className="mb-4">Sales of the month</h6>
                    <DashboardChart />
                </div>
            </div>
        </div>
    );
};

export default DashboardFeature;