import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Tabs.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import TabDescription from "./TabDescription";
import TabInfo from "./TabInfo";
import TabReview from "./TabReview";

class Tabs extends PureComponent {
  render() {
    const { product, match } = this.props;
    const productDescription = product.description;
    return (
      <div>
        <div className="tabs_section_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="tabs_container">
                  <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                    <li className="tab" data-active-tab="tab_1">
                      <NavLink
                        exact
                        to={{
                          pathname: `${match.url}/description`,
                          productDescription: productDescription,
                        }}
                        className="tab"
                        activeClassName="active"
                        product={product}
                      >
                        <span>Description</span>
                      </NavLink>
                    </li>
                    <li className="tab" data-active-tab="tab_2">
                      <NavLink
                        to={`${match.url}/information`}
                        className="tab"
                        activeClassName="active"
                      >
                        <span>Additional Information </span>
                      </NavLink>
                    </li>
                    <li className="tab" data-active-tab="tab_3">
                      <NavLink
                        to={`${match.url}/reviews`}
                        className="tab"
                        activeClassName="active"
                      >
                        <span> Reviews </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            path="/products/:productId/description"
            component={TabDescription}
          />
          <Route path="/products/:productId/information" component={TabInfo} />
          <Route path="/products/:productId/reviews" component={TabReview} />

          <Redirect
            from="/products/:productId"
            to="/products/:productId/information"
          />
        </Switch>
      </div>
    );
  }
}

Tabs.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Tabs;
