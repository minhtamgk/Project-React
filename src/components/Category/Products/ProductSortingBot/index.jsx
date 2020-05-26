import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductSortingBot.css';
import { Link } from 'react-router-dom';
class ProductSortingBot extends PureComponent {

    handleClickChangeLimit = (newLimit) => {
        const { onChangeLimit } = this.props;
        if (onChangeLimit) {
            onChangeLimit(newLimit)
        }
    };

    handleClickChangePage = (newPage) => {
        const { onChangePage } = this.props;
        if (onChangePage) {
            onChangePage(newPage)
        }
    };

    render() {
        const { fillter } = this.props;
        const newLimit = {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
        }
        const newPage = {
            one: 1,
            two: 2,
            three: 3,
        }
        return (
            <div>
                <div className="product_sorting_container product_sorting_container_bottom clearfix">
                    <ul className="product_sorting">
                        <li>
                            <span>Show:</span>
                            <span className="num_sorting_text">{fillter._limit}</span>
                            <i className="fa fa-angle-down"></i>
                            <ul className="sorting_num">
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.one, fillter)}><span>01</span></li>
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.two, fillter)}><span>02</span></li>
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.three, fillter)}><span>03</span></li>
                                <li className="num_sorting_btn" onClick={() => this.handleClickChangeLimit(newLimit.four, fillter)}><span>04</span></li>
                            </ul>
                        </li>
                    </ul>
                    <span className="showing_results">Showing 1–3 of 12 results</span>
                    <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                            <span>{fillter._page}</span>
                            <ul className="page_selection">
                                <li onClick={() => this.handleClickChangePage(newPage.one, fillter)}><Link to='#'>1</Link></li>
                                <li onClick={() => this.handleClickChangePage(newPage.two, fillter)}><Link to='#'>2</Link></li>
                                <li onClick={() => this.handleClickChangePage(newPage.three, fillter)}><Link to='#'>3</Link></li>
                            </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page_1" className="page_next"><Link to='#'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                    </div>

                </div>
            </div>
        );
    }
}

ProductSortingBot.propTypes = {
    fillter: PropTypes.object.isRequired,
    onChangeSorting: PropTypes.func,
    onChangeLimit: PropTypes.func,
    onChangePage: PropTypes.func,
};
ProductSortingBot.defaultProps = {
    onChangeSorting: null,
    onChangeLimit: null,
    onChangePage: null,
}

export default ProductSortingBot;