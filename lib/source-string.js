'use strict';

var crypto = require('crypto');

module.exports = function addSourceStringFn(proto) {

    proto.sourceStringGet = function sourceStringGet(resource, source, callback) {
        if(typeof source === 'object') {
            var md5 = crypto.createHash('md5');
            md5.update(source.key + ':' + (source.context || ''));
            source = md5.digest('hex');
        }
        return this._projectGet('/resource/' + resource + '/source/' + source, callback);
    };

    proto.sourceStringPut = function sourceStringPut(resource, source, data, callback) {
        if(typeof source === 'object') {
            var md5 = crypto.createHash('md5');
            md5.update(source.key + ':' + (source.context || ''));
            source = md5.digest('hex');
        }
        return this._projectPut('/resource/' + resource + '/source/' + source, data, callback);
    };
};