import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { NavLink } from 'react-router-dom';
class Footer extends PureComponent {
	render() {
		return (
			<>
				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
									<ul className="footer_nav">
										<li><NavLink to="https://nordiccoder.com/blog" target="blank">blog</NavLink></li>
										<li><NavLink to='#'>FAQs</NavLink></li>
										<li><NavLink to='/contact'>Contact us</NavLink> </li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
									<ul>
										<li><NavLink to='#'><i className="fab fa-facebook-f" aria-hidden="true"></i></NavLink></li>
										<li><NavLink to='#'><i className="fab fa-twitter" aria-hidden="true"></i></NavLink></li>
										<li><NavLink to='#'><i className="fab fa-instagram" aria-hidden="true"></i></NavLink></li>
										<li><NavLink to='#'><i className="fab fa-skype" aria-hidden="true"></i></NavLink></li>
										<li><NavLink to='#'><i className="fab fa-pinterest" aria-hidden="true"></i></NavLink></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="footer_nav_container">
									<div className="cr">©2018 All Rights Reserverd. This template is made with <i className="far fa-heart" aria-hidden="true"></i> by <NavLink to='#'>Colorlib</NavLink></div>
								</div>
							</div>
						</div>
					</div>
				</footer>

			</>
		);
	}
}

Footer.propTypes = {

};

export default Footer;