import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Home/Banner';
import Slider from '../../components/Home/Slider';
import Events from '../../components/Home/Events';
import NewArrivals from '../../components/Home/Arrivals';

class HomePage extends PureComponent {

	render() {

		return (
			<div>
				<Slider />
				<Banner />
				<NewArrivals />
				<Events />

			</div>
		);
	}
}

HomePage.propTypes = {

};

export default HomePage;