import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./categoryMenu.css";
class CategoryMenu extends PureComponent {
  handleClickChangeCategoryMenu = (categories) => {
    const { onChangeCategoryMenu } = this.props;
    if (onChangeCategoryMenu) {
      onChangeCategoryMenu(categories);
    }
  };

  render() {
    const { category, activeCategoryId } = this.props;
    return (
      <>
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Product Category</h5>
          </div>
          <ul className="sidebar_categories">
            {category.map((categories) => {
              const isActive = categories.id === activeCategoryId;

              return (
                <li
                  style={{
                    color: isActive ? "deeppink" : "black",
                  }}
                  key={categories.id}
                  onClick={() => this.handleClickChangeCategoryMenu(categories)}
                >
                  <Link to="#">{categories.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

CategoryMenu.propTypes = {
  category: PropTypes.array.isRequired,
  activeCategoryId: PropTypes.string,
};
CategoryMenu.defaultProps = {
  category: [],
  activeCategoryId: "",
};

export default CategoryMenu;
