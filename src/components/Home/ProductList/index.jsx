import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Products.css";
import { Link } from "react-router-dom";
class ProductList extends PureComponent {
  render() {
    const { productList } = this.props;
    console.log(productList);
    return (
      <>
        <ul>
          <div className="row">
            <div className="col">
              <div
                className="product-grid"
                data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
              >
                {productList.map((products) => (
                  <li className="product-item men" key={products.id}>
                    <div>
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
                            <Link to="/single">{products.name} </Link>
                          </h6>
                          <div className="product_price">
                            {products.salePrice}
                            <span>{products.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                      <div className="red_button add_to_cart_button">
                        <Link to="#">add to cart</Link>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </ul>
      </>
    );
  }
}
ProductList.propTypes = {};
export default ProductList;
