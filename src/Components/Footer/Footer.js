import React from 'react';
import logo from '../../Assets/Images/logo3.png'

import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-card">
                            <img src={logo} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad error vero voluptatum excepturi ut placeat numquam blanditiis.</p>
                            <div className="social-icons">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-card">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-phone-square"></i>+880 173592418</li>
                                <li><i className="fas fa-envelope"></i>sarowar.hosen02@gmail.com</li>
                                <li><i className="fas fa-search-location"></i>Kandirpar, Cumilla</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-card">
                            <h5>Our Branches</h5>
                            <ul className="list-unstyled">
                                <li>Dhaka</li>
                                <li>Chittagong</li>
                                <li>Khulna</li>
                                <li>Sylhet</li>
                                <li>Rajshahi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-card">
                            <h5>Subscribe Us</h5>
                            <form action="">
                                <input type="email" className="form-control" placeholder="Subscribe us" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;