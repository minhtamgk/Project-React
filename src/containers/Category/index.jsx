import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/Category/Breadcrumbs';
import Sidebars from '../../components/Category/Sidebar';
import Maincontent from '../../components/Category/Products';

class Category extends PureComponent {
    render() {
        return (
            <div>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrumb />
                            <Sidebars />
                            <Maincontent />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Category.propTypes = {

};

export default Category;