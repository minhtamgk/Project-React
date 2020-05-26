import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
    render() {
        return (
            <>

                <header className="header trans_300">

                    {/* Top Navigation  */}

                    <div className="top_nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="top_nav_right">
                                        <ul className="top_nav_menu">

                                            {/* Currency / Language / My Account  */}
                                            <li className="language">
                                                <NavLink to='#'>
                                                    English
                                <i className="fa fa-angle-down"></i>
                                                </NavLink>
                                                <ul className="language_selection">
                                                    <li> <NavLink to='#'>French</NavLink></li>
                                                    <li> <NavLink to='#'>Italian</NavLink></li>
                                                    <li> <NavLink to='#'>German</NavLink></li>
                                                    <li> <NavLink to='#'>Spanish</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="account">
                                                <NavLink to='#'>
                                                    My Account
                                <i className="fa fa-angle-down"></i>
                                                </NavLink>
                                                <ul className="account_selection">
                                                    <li> <NavLink to='#'><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</NavLink></li>
                                                    <li> <NavLink to='#'><i className="fa fa-user-plus" aria-hidden="true"></i>Register</NavLink></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Navigation  */}

                    <div className="main_nav_container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <div className="logo_container">
                                        <NavLink to='#'>Nordic<span>Shop</span></NavLink>
                                    </div>
                                    <nav className="navbar">
                                        <ul className="navbar_menu">
                                            <li>
                                                <NavLink
                                                    to="/"> Home
                                            </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/shop"> Shop</NavLink>
                                            </li>
                                            <li> <NavLink to='#'>promotion</NavLink></li>
                                            <li><NavLink to="https://nordiccoder.com/blog" target="blank">blog</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                        <ul className="navbar_user">
                                            <li className="checkout">
                                                <NavLink to='#'>
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    <span id="checkout_items" className="checkout_items">2</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className="hamburger_container">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="fs_menu_overlay"></div>
                <div className="hamburger_menu">
                    <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
                    <div className="hamburger_menu_content text-right">
                        <ul className="menu_top_nav">
                            <li className="menu_item has-children">
                                <NavLink to='#'>
                                    usd
                <i className="fa fa-angle-down"></i>
                                </NavLink>
                                <ul className="menu_selection">
                                    <li><NavLink to='#'>cad</NavLink></li>
                                    <li><NavLink to='#'>aud</NavLink></li>
                                    <li><NavLink to='#'>eur</NavLink></li>
                                    <li><NavLink to='#'>gbp</NavLink></li>
                                </ul>
                            </li>
                            <li className="menu_item has-children">
                                <NavLink to='#'>
                                    English
                <i className="fa fa-angle-down"></i>
                                </NavLink>
                                <ul className="menu_selection">
                                    <li><NavLink to='#'>French</NavLink></li>
                                    <li><NavLink to='#'>Italian</NavLink></li>
                                    <li><NavLink to='#'>German</NavLink></li>
                                    <li><NavLink to='#'>Spanish</NavLink></li>
                                </ul>
                            </li>
                            <li className="menu_item has-children">
                                <NavLink to='#'>
                                    My Account
                <i className="fa fa-angle-down"></i>
                                </NavLink>
                                <ul className="menu_selection">
                                    <li><NavLink to='#'><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</NavLink>
                                    </li>
                                    <li><NavLink to='#'><i className="fa fa-user-plus" aria-hidden="true"></i>Register</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu_item"><NavLink to="/">Home </NavLink></li>
                            <li className="menu_item"><NavLink to="/shop">Shop</NavLink></li>
                            <li className="menu_item"><NavLink to='#'>promotion</NavLink></li>
                            <li className="menu_item"><NavLink to='#'>pages</NavLink></li>
                            <li className="menu_item"><NavLink to="https://nordiccoder.com/blog" target="blank">blog</NavLink></li>
                            <li className="menu_item"><NavLink to='#'>contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

Header.propTypes = {

};

export default Header;