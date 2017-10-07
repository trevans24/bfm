import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../css/components/nav.css';
const Link = require('react-router-dom').Link;

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
					openSecondary={true}
				>
					<MenuItem>
						<Link to="/">
							The Market
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/vendors">
							Vendors
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/involved">
							Get Involved
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/resources">
							Resources
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/social">
							Social
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/donate">
							Donate
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/find">
							Find Us
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/about">
							About Us
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/blog">
							Blog
						</Link>
					</MenuItem>
				</Drawer>
			</div>
		)
	}
}