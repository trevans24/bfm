import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../css/components/nav.css';

export default class Nav extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	open: false,
	  };
	}

	_toggle = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		return(
			<div>
				<AppBar
					title="Bellevue Farmers Market"
					className="app-bar"
					onLeftIconButtonTouchTap={this._toggle}
				/>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={open => this.setState({open})}
				>
					<MenuItem>The Market</MenuItem>
					<MenuItem>Vendors</MenuItem>
					<MenuItem>Get Involved</MenuItem>
					<MenuItem>Resources</MenuItem>
					<MenuItem>Social</MenuItem>
					<MenuItem>Donate</MenuItem>
					<MenuItem>Find Us</MenuItem>
					<MenuItem>About Us</MenuItem>
				</Drawer>
			</div>
		)
	}
}