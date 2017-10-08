import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import '../../css/components/title.css';

export default class Title extends Component {
	render() {
		return(
			<div className="title">
				<img src={logo} alt="bellevue-farmers-market" className="title-logo" />
				<h4 className="app-bar-title">Bellevue Farmers Market</h4>
			</div>
		)
	}
}