import React, { Component } from 'react';

const twitter = require('../../services/twitter');

export default class Twitter extends Component {
	constructor() {
	  super();
	
	  this.state = {
			loading: false,
			tweets: '',
	  };
	}

	componentWillMount() {
		this.updateTweets();
	}

	updateTweets() {
		twitter.getTweets().then((data) => {
			console.log(data);
		});
	}

	render() {
		return(
			<div>
				<h1>twitter works</h1>
			</div>
		)
	}
}