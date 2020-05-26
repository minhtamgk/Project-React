import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "./fillter.css";
import NumberFormat from "react-number-format";

class Fillter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 30000000,
    };
  }

  handleChangeFillter = (value) => {
    const minValue = value[0];
    const maxValue = value[1];
    this.setState({ minValue, maxValue });
  };

  handleClickChangePrice = (minValue, maxValue) => {
    const { onChangePrice } = this.props;
    if (onChangePrice) {
      onChangePrice(minValue, maxValue);
    }
  };

  render() {
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const { minValue, maxValue } = this.state;
    return (
      <div>
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Filter by Price</h5>
          </div>
          <div id="slider-range">
            <div>
              <Range
                min={0}
                max={30000000}
                defaultValue={[minValue, maxValue]}
                onChange={(value) => this.handleChangeFillter(value)}
                aria-labelledby="range-slider"
              />
            </div>
          </div>
          <div>
            <p>Min Price : </p>
            <NumberFormat
              value={minValue}
              displayType="text"
              thousandSeparator={true}
            />
            VND
            <p>Max Price : </p>
            <NumberFormat
              value={maxValue}
              displayType="text"
              thousandSeparator={true}
            />
            VND
          </div>
          <div
            className="filter_button"
            onClick={() => this.handleClickChangePrice(minValue, maxValue)}
          >
            <span>filter</span>
          </div>
        </div>
      </div>
    );
  }
}

Fillter.propTypes = {
  onChangePrice: PropTypes.func,
};
Fillter.defaultProps = {
  onChangePrice: null,
};

export default Fillter;
