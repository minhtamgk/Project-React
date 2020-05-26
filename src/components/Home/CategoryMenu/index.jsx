import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CategoryMenu.css';

class CategoryMenu extends PureComponent {

    handleActiveClick = (categories) => {
        const { onChangeCategoryMenu } = this.props;
        if (onChangeCategoryMenu) {
            onChangeCategoryMenu(categories);
        }
    };

    render() {

        const { categoryList, activeCategoryId } = this.props;
        console.log(categoryList)

        return (
            <>
                <div className="row align-items-center">
                    <div className="col text-center">
                        <div className="new_arrivals_sorting">
                            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                {categoryList.map(categories => {
                                    const isActive = categories.id === activeCategoryId;
                                    return (
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center " key={categories.id}
                                            style={{ backgroundColor: isActive ? '#fe4c50' : 'white', color: isActive ? 'white' : 'black' }}
                                            onClick={() => this.handleActiveClick(categories)}
                                        >
                                            {categories.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

CategoryMenu.propTypes = {
    categoryList: PropTypes.array,
    activeCategoryId: PropTypes.string,
    onChangeCategoryMenu: PropTypes.func,
};
CategoryMenu.defaultProps = {
    categoryList: [],
    activeCategoryId: "",
    onChangeCategoryMenu: null,
};

export default CategoryMenu;