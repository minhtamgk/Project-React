import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TabDescription.css";
class TabDescription extends PureComponent {
  render() {
    const productDescription = this.props.location.productDescription;
    const setInnerHtml = { __html: productDescription };
    return (
      <div className="container">
        {/* <!-- Tab Description --> */}

        <div id="tab_1" className="tab_container active">
          <div className="row">
            <div className="col desc_col">
              <div className="tab_title">
                <h4>Description</h4>
              </div>
              <div dangerouslySetInnerHTML={setInnerHtml} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TabDescription.propTypes = {};

export default TabDescription;
