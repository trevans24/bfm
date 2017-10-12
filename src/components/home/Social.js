import React, { Component } from 'react';

// styles

// components
import Twitter from './Twitter';

export default class Social extends Component {
	render() {
		return(
			<div>
				<h1>Social Works</h1>
				<Twitter />
			</div>
		)
	}
}