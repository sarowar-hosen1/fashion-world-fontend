import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import brandLogo from '../../Assets/Images/logo2.png';
import { Auth } from '../../Auth/Auth';
import { isAdmin } from '../../Redux/admin/adminAction';
import './Header.scss';

const Header = () => {
    const auth = Auth();

    const dispath = useDispatch();

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const cart = useSelector(state => state.cartItems.carts);
    const wish = useSelector(state => state.wishItems.wish);
    const admin = useSelector(state => state.admin.admin);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        fetch("https://calm-mountain-62998.herokuapp.com/isAdmin", {
            method: "POST",
            headers: {
                'authorization': token,
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                dispath(isAdmin(result))
            })
    })



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={brandLogo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                COLLECTION
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/collection/girl">GIRL</Link>
                                <Link className="dropdown-item" to="/collection/man">MEN</Link>
                                <Link className="dropdown-item" to="/collection/summer">SUMMER</Link>
                                <Link className="dropdown-item" to="/collection/kids">KIDS</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">ABOUT US</Link>
                        </li>

                        {
                            user ?
                                <li className="nav-item">
                                    <Link
                                        style={{ color: "#EF2c91" }}
                                        className="nav-link"
                                        id="profile"
                                        role="button"
                                        data-toggle="dropdown"
                                    >
                                        {user.name}
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="profile">
                                        {
                                            admin &&
                                            <>
                                                <Link className="dropdown-item">Manage Account</Link>
                                                <Link className="dropdown-item">Order History</Link>
                                                <Link className="dropdown-item">Wishlist</Link>
                                                <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                                            </>
                                        }
                                        <Link onClick={() => auth.sign_out()} className="dropdown-item">Sign out</Link>
                                    </div>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">LOGIN </Link>
                                </li>
                        }

                        <li className="nav-item">
                            <Link className="nav-link" to="/wish-list">
                                <i className="far fa-heart"></i>
                                <span className="text-danger">{wish.length && wish.length}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart-items">
                                <i className="far fa-cart-plus"></i>
                                <span className="text-danger">{cart.length && cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;