import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Maincontent.css';
import ProductSortingHead from './ProductSortingHead';
import ProductGird from './ProductGird';
import ProductSortingBot from './ProductSortingBot';
import productApi from '../../../api/ProductApi';
class Maincontent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fillter: {
                _page: 1,
                _limit: 12,
                _sort: 'original-order',
                _order: 'asc',
            },
            productSeach: [],
        };
    };

    async componentDidMount() {
        try {
            const productSeachs = await productApi.getAll(this.state.fillter)
            this.setState({ productSeach: productSeachs.data })
            console.log({ productSeachs });
            this.handleChangeSorting('originalPrice')

        } catch (error) {
            console.log('Fail fetch Api product', error.message)
        }
    }

    handleChangeSorting = async (newSort) => {
        try {
            const newFillter = {
                ...this.state.fillter,
                _sort: newSort,
            };
            const newProduct = await productApi.getAll(newFillter);
            console.log(newProduct.data)
            this.setState({
                fillter: newFillter,
                productSeach: newProduct.data,
            })
            console.log(this.state.productSeach)
        } catch (error) {
            console.log('failed to fetch api', error.message)
        }
    }

    handleChangeLimit = async (newLimit) => {
        try {
            const newFillter = {
                ...this.state.fillter,
                _limit: newLimit,
            };
            const newProduct = await productApi.getAll(newFillter);
            this.setState({ productSeach: newProduct.data, fillter: newFillter })
        }
        catch (error) {
            console.log('failed to fecth API', error.message)
        }
    }

    handleChangePage = async (newPage) => {
        try {
            const newFillter = {
                ...this.state.fillter,
                _page: newPage,
            }
            const newProduct = await productApi.getAll(newFillter);
            this.setState({ fillter: newFillter, productSeach: newProduct.data })
            console.log(this.state.productSeach)
        } catch (error) {
            console.log("Failed to fetch API", error.message)
        }
    };

    render() {
        const { productSeach, fillter } = this.state;
        return (
            <div>

                {/* Main Content  */}

                <div className="main_content">

                    {/* Products  */}

                    <div className="products_iso">
                        <div className="row">
                            <div className="col">

                                {/* Product Sorting  */}
                                <ProductSortingHead
                                    fillter={fillter}
                                    productSeach={productSeach}
                                    newSort={fillter._sort}
                                    onChangeSorting={this.handleChangeSorting}
                                    onChangeLimit={this.handleChangeLimit}
                                    onChangePage={this.handleChangePage}
                                />
                                {/* Product Grid */}

                                <ProductGird productSeach={productSeach} />

                                {/* Product Sorting  */}
                                <ProductSortingBot
                                    fillter={fillter}
                                    productSeach={productSeach}
                                    newSort={fillter._sort}
                                    onChangeLimit={this.handleChangeLimit}
                                    onChangePage={this.handleChangePage}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Maincontent.propTypes = {

};

export default Maincontent;