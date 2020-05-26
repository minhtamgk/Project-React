import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Breadcumbs.css';
import { NavLink } from 'react-router-dom';
class Breadcrumb extends PureComponent {
    render() {
        return (
            <div>

                {/* Breadcrumbs */}

                <div className="breadcrumbs d-flex flex-row align-items-center">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li className="active"><NavLink to='/'><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</NavLink></li>
                    </ul>
                </div>
            </div>

        );
    }
}

Breadcrumb.propTypes = {

};

export default Breadcrumb;