import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Breadcums.css";
import { NavLink } from "react-router-dom";
class Breadcums extends PureComponent {
  render() {
    const { categoryName } = this.props;
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
                <li>
                  <NavLink to="/shop">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    Men's
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink to="#">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    {categoryName}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Breadcums.propTypes = {
  categoryName: PropTypes.string,
};
Breadcums.defaultProps = {
  categoryName: "",
};

export default Breadcums;
