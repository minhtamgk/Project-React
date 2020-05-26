import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './breadcum.css';
import { NavLink } from 'react-router-dom';

class Breadcum extends PureComponent {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">

                        {/* Breadcrumbs  */}

                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="active"><NavLink to='#'><i className="fa fa-angle-right" aria-hidden="true"></i>Contact</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Breadcum.propTypes = {

};

export default Breadcum;