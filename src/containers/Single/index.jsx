import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Breadcums from "../../components/Single/Breadcums";
import MainProducts from "../../components/Single/Main";
import Tabs from "../../components/Single/Tabs";
import "./single.css";
import productApi from "../../api/ProductApi";
import postApi from "../../api/postApi";

class Single extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productImages: [],
      categoryName: "",
    };
  }
  async componentDidMount() {
    const { match } = this.props;
    try {
      const postId = match.params.productId;
      const product = await productApi.getById(postId);

      const productImages = product.images;
      this.setState({ product, productImages });

      const categoriesApi = await postApi.getAll({ _limit: 6 });
      const categories = categoriesApi.data;
      const category = categories.filter(
        (category) => category.id === product.categoryId
      );
      const categoryName = category[0].name;
      this.setState({ categoryName });
    } catch (error) {
      console.log("Failed to fetch:", error);
    }
  }
  render() {
    const { product, productImages, categoryName } = this.state;

    return (
      <div>
        <div className="container single_product_container">
          <Breadcums categoryName={categoryName} />
          <MainProducts product={product} productImages={productImages} />
        </div>
        <Tabs product={product} match={this.props.match} />
      </div>
    );
  }
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Single;
