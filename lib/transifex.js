'use strict';

var utils = require('./utils');
var request = require('request');

function Transifex(opts) {
    if(!(this instanceof Transifex)) {
        return new Transifex(opts);
    }
    if(typeof opts !== 'object') {
        throw new TypeError('opts [object] is required');
    }
    if(!(opts.user || opts.username)) {
        throw new TypeError('opts.user or opts.username is required');
    }

    if(!(opts.pass || opts.password)) {
        throw new TypeError('opts.pass or opts.password is required');
    }

    if(!opts.project) {
        throw new TypeError('opts.project is required');
    }

    var user = opts.user || opts.username;
    var pass = opts.pass || opts.password;

    Object.defineProperties(this, {
        apiPath: {
            value: opts.apiPath || 'https://www.transifex.com/api/2'
        },
        project: {
            value: opts.project
        },
        opts: {
            value: function (url) {
                return {
                    uri: this._getUrl(url),
                    auth: {
                        user: user,
                        pass: pass,
                        sendImmediately: true
                    }
                }
            }
        }
    });
}

Transifex.prototype._getProjectUrl = function (url) {
    return '/project/' + this.project + (url || '');
};

Transifex.prototype._getUrl = function (url) {
    return this.apiPath + url;
};

Transifex.prototype._projectGet = function (url, callback) {
    return this._get(this._getProjectUrl(url), callback);
};

Transifex.prototype._get = function (url, callback) {
    var opts = this.opts(url);
    opts.method = 'GET';
    return this._request(opts, callback);
};

Transifex.prototype._projectPost = function (url, data, callback) {
    return this._post(this._getProjectUrl(url), data, callback);
};

Transifex.prototype._post = function (url, data, callback) {
    if(utils.isJsonData(data)) {
        var opts = this.opts(url);
        opts.json = data;
        opts.method = 'POST';
        return this._request(opts, callback);
    } else {
        var err = new TypeError('Only JSON data is currently supported');
        if(callback) {
            callback(err);
        } else {
            throw err;
        }
    }
};

Transifex.prototype._projectPut = function (url, data, callback) {
    return this._put(this._getProjectUrl(url), data, callback);
};

Transifex.prototype._put = function (url, data, callback) {
    if(utils.isJsonData(data)) {
        var opts = this.opts(url);
        opts.json = data;
        opts.method = 'PUT';
        return this._request(opts, callback);
    } else {
        var err = new TypeError('Only JSON data is currently supported');
        if(callback) {
            callback(err);
        } else {
            throw err;
        }
    }
};

Transifex.prototype._projectDelete = function (url, callback) {
    return this._delete(this._getProjectUrl(url), callback);
};

Transifex.prototype._delete = function (url, callback) {
    var opts = this.opts(url);
    opts.method = 'DELETE';
    return this._request(opts, callback);
};

Transifex.prototype._request = function (opts, callback) {
    if(!callback) { // No callback so return pipe
        return request(opts);
    }
    request(opts, function (error, response, body) {
        if(error) {
            callback(error);
            return;
        }
        if(response.statusCode < 200 || response.statusCode >= 300) {
            var err = new Error('Non 200 response');
            err.statusCode = response.statusCode;
            err.message = body;
            callback(err, body);
            return;
        }
        if(typeof body !== 'string' || response.headers['content-type'].indexOf('application/json') === -1) {
            callback(null, body);
            return;
        }
        var parseErr = null;
        var content = false;
        try {
            content = JSON.parse(body);
            if(content.content && content.mimetype === 'application/json') {
                content = JSON.parse(content.content);
            }
        } catch(e) {
            parseErr = new Error('Malformed JSON response on ' + opts.uri);
            content = body;
        }

        callback(parseErr, content);
    });
};

require('./language')(Transifex.prototype);
require('./language-info')(Transifex.prototype);
require('./project')(Transifex.prototype);
require('./resource')(Transifex.prototype);
require('./source-string')(Transifex.prototype);
require('./statistics')(Transifex.prototype);
require('./tmx')(Transifex.prototype);
require('./translation')(Transifex.prototype);

module.exports = Transifex;