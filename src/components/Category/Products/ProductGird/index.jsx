import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductGird.css";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

class ProductGird extends PureComponent {
  render() {
    const { productSeach } = this.props;
    console.log(productSeach);
    return (
      <>
        <ul className="product-grid">
          {productSeach.map((products) => (
            <li className="product-item men" key={products.id}>
              <Link to={`/products/${products.id}`}>
                <div className="product discount product_filter">
                  <div className="product_image">
                    <img src={products.images[0]} alt="" />
                  </div>
                  <div className="favorite favorite_left"></div>
                  <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                    <span>-$20</span>
                  </div>
                  <div className="product_info">
                    <h6 className="product_name">
                      <Link to={`/products/${products.id}`}>
                        {products.name}
                      </Link>
                    </h6>
                    <div className="product_price">
                      <NumberFormat
                        value={products.salePrice}
                        displayType="text"
                        thousandSeparator={true}
                      />
                      VND
                      <span className="sale_price">
                        {products.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="red_button add_to_cart_button">
                <Link to="#">add to cart</Link>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ProductGird.propTypes = {
  productSeach: PropTypes.array,
};
ProductGird.defaultProps = {
  productSeach: [],
};

export default ProductGird;
