import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./NewArrivals.css";
import CategoryMenu from "../CategoryMenu";
import ProductList from "../ProductList";
import postApi from "../../../api/postApi";

class NewArrivals extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],

      productList: [],

      activeCategoryId: "32a63859-293f-4e5b-817e-968e28bf309d",
    };
  }

  async componentDidMount() {
    try {
      const categories = await postApi.getAll({ _limit: 5 });
      console.log(categories.data);
      this.handleClickChangeMenu(categories.data[0]);
      this.setState({ categoryList: categories.data });
      console.log({ categories });
    } catch (error) {
      console.log("Failed to fecth categoryList", error.message);
    }
  }

  handleClickChangeMenu = async (categories) => {
    try {
      const productList = await postApi.getById(categories.id);
      console.log(productList.data);
      this.setState({
        activeCategoryId: categories.id,
        productList: productList.data,
      });
    } catch (error) {
      console.log("Failed fetch to data", error.message);
    }
  };

  render() {
    const { categoryList, productList, activeCategoryId } = this.state;

    return (
      <>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>

            <CategoryMenu
              categoryList={categoryList}
              activeCategoryId={activeCategoryId}
              onChangeCategoryMenu={this.handleClickChangeMenu}
            />

            <ProductList productList={productList} />
          </div>
        </div>
      </>
    );
  }
}

NewArrivals.propTypes = {};

export default NewArrivals;
