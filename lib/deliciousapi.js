/*
 * deliciousAPI
 * https://github.com/tobiaswright/deliciousapi
 *
 * Copyright (c) 2014 Tobias Wright
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request'),
	xml2json = require("node-xml2json");;

var config = {
	url : {
		access_token : "https://avosapi.delicious.com/api/v1/oauth/token",
		get_recent : "https://delicious.com/v1/posts/recent",
		get_all : "https://delicious.com//v1/posts/all"
	}
}

var getAcessToken = function( client_id, client_secret, code, callback ) {

	var options = {
		qs: {
			client_id: client_id,
			client_secret: client_secret,
			grant_type:"code",
			code: code,
			redirect_uri:"www.example.com"
		},
		url: config.url.access_token
	}

	request.post(options, function (error, response, body) {
		callback(body);
	});
}

var getRecent = function( bearer, callback ) {

	var options = {
		headers: {
			"Authorization": "Bearer "+bearer
		},
		url: config.url.get_recent
	}

	request.get(options, function (error, response, body) {
		var bodyR = body.replace(/'/gi, "&#39;")
		callback( xml2json.parser( bodyR ) );
	});
}

var getAll = function( bearer, callback ) {

	var options = {
		headers: {
			"Authorization": "Bearer "+bearer
		},
		url: config.url.get_all
	}

	request.get(options, function (error, response, body) {
		var bodyR = body.replace(/'/gi, "&#39;")
		callback( xml2json.parser( bodyR ) );
	});
}

module.exports = {
	getAcessToken: getAcessToken,
	getRecent: getRecent,
	getAll: getAll
}