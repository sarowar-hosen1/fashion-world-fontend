import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import LocalMall from '@material-ui/icons/LocalMall';
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar.scss";
import { useHistory, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    const history = useHistory();
    const { path, url } = useRouteMatch()

    return (
        <div className="sidebar col-md-2 col-sm-3 col-4 px-0">
            <h5 className="sidebar-title">Dashboard</h5>
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li onClick={() => history.push(`${url}`)} className="sidebar-list-item">
                        <HomeIcon />
                        Home
                    </li>
                    <li onClick={() => history.push(`${url}/orders`)} className="sidebar-list-item">
                        <ShoppingCart />
                        Order
                    </li>
                    <li onClick={() => history.push(`${url}/products`)} className="sidebar-list-item">
                        <LocalMall />
                        Products
                    </li>
                    <li onClick={() => history.push(`${url}/add-product`)} className="sidebar-list-item">
                        <AddIcon />
                        Add Products
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;