import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductSorting.css';
import { NavLink, Link } from 'react-router-dom';

class ProductSortingHead extends PureComponent {

    handleClickChangeSorting = (newSort) => {
        const { onChangeSorting } = this.props;
        if (onChangeSorting) {
            onChangeSorting(newSort);
        }
    }

    handleClickChangeLimit = (newLimit) => {
        const { onChangeLimit } = this.props;
        if (onChangeLimit) {
            onChangeLimit(newLimit)
        }
    }

    handleClickChangePage = (newPage) => {
        const { onChangePage } = this.props;
        if (onChangePage) {
            onChangePage(newPage)
        }
    };

    render() {
        const { fillter } = this.props
        const newSort = {
            originalorder: 'originalPrice',
            price: 'salePrice',
            name: 'name'
        };
        const newLimit = {
            six: 6,
            twelve: 12,
            twelvetyfour: 24,
        }
        const newPage = {
            one: 1,
            two: 2,
            three: 3,
        }
        const titleSort = `${(fillter._sort === 'originalPrice' ? 'Default Sorting' : '') || (fillter._sort === 'salePrice' ? 'Price' : '') || (fillter._sort === 'name' ? 'Product Name' : '')}`
        return (
            <>
                <div className="product_sorting_container product_sorting_container_top">
                    <ul className="product_sorting">
                        <li>
                            <span className="type_sorting_text">{titleSort}</span>
                            <i className="fa fa-angle-down"></i>
                            <ul className="sorting_type">

                                <li className="type_sorting_btn active" data-isotope-option='{ "sortBy": "original-order" }' onClick={() => this.handleClickChangeSorting(newSort.originalorder, fillter)}><span>Default Sorting</span></li>
                                <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }' onClick={() => this.handleClickChangeSorting(newSort.price, fillter)}><span>Price</span></li>
                                <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }' onClick={() => this.handleClickChangeSorting(newSort.name, fillter)}><span>Product Name</span></li>
                            </ul>
                        </li>
                        <li>
                            <span>Show</span>
                            <span className="num_sorting_text">{fillter._limit}</span>
                            <i className="fa fa-angle-down"></i>
                            <ul className="sorting_num">
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.six, fillter)}><span>6</span></li>
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.twelve, fillter)}><span>12</span></li>
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.twelvetyfour, fillter)}><span>24</span></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                            <span>{fillter._page}</span>
                            <ul className="page_selection">
                                <li onClick={() => this.handleClickChangePage(newPage.one, fillter)}> <Link to="#">1</Link> </li>
                                <li onClick={() => this.handleClickChangePage(newPage.two, fillter)} ><Link to="#">2</Link></li>
                                <li onClick={() => this.handleClickChangePage(newPage.three, fillter)}><Link to="#">3</Link></li>
                            </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page" className="page_next"><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                    </div>

                </div>


            </>
        );
    }
}

ProductSortingHead.propTypes = {
    fillter: PropTypes.object.isRequired,
    onChangeSorting: PropTypes.func,
    onChangeLimit: PropTypes.func,
    onChangePage: PropTypes.func,
};
ProductSortingHead.defaultProps = {
    onChangeSorting: null,
    onChangeLimit: null,
    onChangePage: null,
}

export default ProductSortingHead; 