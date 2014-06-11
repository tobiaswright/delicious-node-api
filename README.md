# deliciousAPI [![Build Status](https://secure.travis-ci.org/tobiaswright/deliciousapi.png?branch=master)](http://travis-ci.org/tobiaswright/deliciousapi)

Node npm for the Delicious API

## Getting Started
Install the module with: `npm install deliciousapi`

## How to use
Please review the [Delicious API](https://delicious.com/developers) for expected inputs and outputs and [authentication](https://github.com/SciDevs/delicious-api/blob/master/api/oauth.md) flow.

By this point you, per the documentation you should have your code to get an access token. You also should create and have your [application credentials](https://delicious.com/settings/developer).

All data is returned as json.

delicious.getAcessToken( client_id, client_secret, code, function( data ) {
	console.log(data);
	//returns bearer and user
})

delicious.getRecent( bearer, function( data ) {
	console.log(data)
})


delicious.getAll( bearer, function( data ) {
	console.log(data)
})