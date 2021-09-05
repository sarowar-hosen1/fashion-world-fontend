import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom"
import Topbar from "./Topbar/Topbar"
import "./Dashboard.scss";
import DashboardHome from './DashboardHome/DashboardHome';
import Orders from './Orders/Orders';
import AddProduct from './AddProduct/AddProduct';
import DashboardProducts from './Products/DashboardProducts';

const Dashboard = () => {
    const { url, path } = useRouteMatch()

    return (
        <div className="col-md-10 col-sm-9 col-8 px-0">
            <Topbar />
            <div className="dashboard-wrapper">
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders />
                    </Route>
                    <Route path={`${path}/products`}>
                        <DashboardProducts />
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <AddProduct />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;