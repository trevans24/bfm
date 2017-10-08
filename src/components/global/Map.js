import React, { Component } from 'react';
// Styles
import '../../css/components/map.css';

export default class Map extends Component {
	render() {
		return(
			<div className="map">
			  <iframe title="map" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=1717+Bellevue+Way+NE,+Bellevue,+WA+98004&amp;aq=0&amp;oq=twitter&amp;sll=47.6263947,-122.2076446&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
			</div>
		)
	}
}