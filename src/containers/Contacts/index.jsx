import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcum from '../../components/Contacts/Breadcum';
import Mapcontent from '../../components/Contacts/MapContent';
import ContactUs from '../../components/Contacts/ContactsUs';

class Contacts extends PureComponent {
	render() {
		return (
			<>
				<div className="container contact_container">
					<Breadcum />
					<Mapcontent />
					<ContactUs />
				</div>
			</>
		);
	}
}

Contacts.propTypes = {

};

export default Contacts;