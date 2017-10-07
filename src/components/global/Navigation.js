import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../../css/components/nav.css';

export default class Nav extends Component {
	render() {
		return(
			<AppBar
				title="Bellevue Farmers Market"
				className="app-bar"
			/>
		)
	}
}