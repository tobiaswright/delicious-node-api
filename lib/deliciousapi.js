/*
 * deliciousAPI
 * https://github.com/tobiaswright/deliciousapi
 *
 * Copyright (c) 2016 Tobias Wright
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var baseUrl = 'http://feeds.del.icio.us/v2/json/'

/**
 * ### getRecent
 * Get receent bookmarks
 *
 * @public
 * @param {sting} [count] - number of entries to return
 * @returns {json} - a json of recent bookmarks
 */
function getRecent(count) {
	return new Promise(function promise(resolve, reject) {
		var options = {
			url: baseUrl + 'recent'
		};

		if (count) {
			options.qs = { count: count };
		}

		request.get(options, function request(error, response, body) {
			if (error) {
				reject(error);
			}

			resolve(body);
		});
	});
}

/**
 * ### getUserRecent
 * Get recent public bookmarks of a specfic user 
 *
 * @public
 * @param {sting} count - name of thr delicious user
 * @param {sting} [count] - number of entries to return
 * @returns {json} - a json of recent bookmarks
 */
function getUserRecent(user, count) {
	return new Promise(function promise(resolve, reject) {
		var options = {
			url: baseUrl + user
		};

		if (count) {
			options.qs = { count: count };
		}

		request.get(options, function request(error, response, body) {
			if (error) {
				reject(error);
			}

			resolve(body);
		});
	});
}

module.exports = {
	getRecent: getRecent,
	getUserRecent: getUserRecent
};
