'use strict';

module.exports = function addSourceStringFn(proto) {

    proto.sourceStringGet = function sourceStringGet(resource, source, callback) {
        return this._projectGet('/resource/' + resource + '/source/' + source, callback);
    };

    proto.sourceStringPut = function sourceStringPut(resource, source, data, callback) {
        return this._projectPut('/resource/' + resource + '/source/' + source, data, callback);
    };
};