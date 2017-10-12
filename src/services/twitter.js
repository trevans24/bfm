// TWIT for Twitter API
// const Twit = require('twit');
// const a = require('axios');
const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=BellevueFarmMkt';

let auth = {
	consumer_key: 'dgftZzzNAGaXDfpMTxzW9SiuD',
	consumer_secret: 'kXDcEPOLZ8TZD7QRGLS7CSt5B83HlVxtRhQaNn3pKhTHEsOsS7',
	access_token: '3239078774-S5zwRkne6DbDy9e5kiDPM2estHGHnpayze4mTB9',
	access_token_secret: 'W4ZmU9rRh3hyyakJKQ7z0VB2foxxZinipknun0K8MUEfV'
};

const headers = new Headers({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*'
});

const init = {
	method: 'GET',
	headers: headers,
	credentials: 'include',
	auth: auth
};

const getTweets = function() {
	console.log(headers.has('Access-Control-Allow-Origin'));
	return fetch(url, init).then(res => {
		console.log(res.status);
		return res.data;
	}).catch(err => {
		console.log(err);
	});
};

module.exports = {
	getTweets: getTweets
};