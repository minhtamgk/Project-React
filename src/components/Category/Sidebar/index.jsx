import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Fillter from "./filter";
import productApi from "../../../api/ProductApi";
import CategoryMenu from "./categoryMenu";
import postApi from "../../../api/postApi";
class Sidebars extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCategoryId: "32a63859-293f-4e5b-817e-968e28bf309d",
      category: [],
      products: [],
      productSeach: [],
      fillter: {
        _page: 1,
        salePrice_gte: 100000,
        salePrice_lte: 200000,
      },
    };
  }

  async componentDidMount() {
    try {
      const category = await postApi.getAll({ _limit: 5 });
      this.setState({ category: category.data });
    } catch (error) {
      console.log("Failed to fecth Api", error.message);
    }
  }

  handleChangeCategoryMenu = async (categories) => {
    try {
      const products = await postApi.getById(categories.id);
      this.setState({
        products: products.data,
        activeCategoryId: categories.id,
      });
    } catch (error) {
      console.log("Failed to fetch Api", error.message);
    }
  };

  handleChangePriceByFillter = async (minValue, maxValue) => {
    try {
      const newFillter = {
        ...this.state.fillter,
        salePrice_gte: minValue,
        salePrice_lte: maxValue,
      };
      const newProducts = await productApi.getAll(newFillter);
      this.setState({
        fillter: newFillter,
        productSeach: newProducts.data,
      });
    } catch (error) {
      console.log("Fecth Api to failed ", error.message);
    }
  };

  render() {
    const { products, fillter, category, activeCategoryId } = this.state;
    console.log(products);
    return (
      <>
        {/* Sidebar  */}

        <div className="sidebar">
          <CategoryMenu
            category={category}
            activeCategoryId={activeCategoryId}
            onChangeCategoryMenu={this.handleChangeCategoryMenu}
          />

          {/* Price Range Filtering  */}
          <Fillter
            fillter={fillter}
            onChangePrice={this.handleChangePriceByFillter}
          />
        </div>
      </>
    );
  }
}

Sidebars.propTypes = {};

export default Sidebars;
