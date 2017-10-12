import React, { Component } from 'react';
// Images
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
// styles
import '../../css/components/footer.css';
// Component
import Map from '../global/Map';

export default class Footer extends Component {
	render() {
		return(
			<div className="container-fluid footer">
				<div className="footer-map">
					<Map />
				</div>
				<div className="footer-contact">
					<div className="social-icons" >
						<a href="https://www.facebook.com/bellevueFM/"><img src={facebook} alt="facebook" height="64" width="64" className="social-icon-img"/></a>
						<a href="https://www.instagram.com/bellevuefarmersmrkt/"><img src={instagram} alt="instagram" height="64" width="64" className="social-icon-img"/></a>
						<a href="https://twitter.com/BellevueFarmMkt"><img src={twitter} alt="twitter" height="75" width="75" className="twitter"/></a>
					</div>
					<h5 className="footer-text">1717 Bellevue Way Northeast</h5>
					<h5 className="footer-text">Bellevue, WA 98004</h5>
					<h5 className="footer-text">(425)454-8474</h5>
					<h5 className="footer-text">fresh@bellevuefarmersmarket.org</h5>
				</div>
			</div>
		);
	}
}