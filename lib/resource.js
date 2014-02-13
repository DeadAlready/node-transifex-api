'use strict';

module.exports = function addResourceFn(proto) {

    proto.resourcesGet = function resourcesGet(callback) {
        return this._projectGet('/resources', callback);
    };

    proto.resourcesPost = function resourcesPost(data, callback) {
        return this._projectPost('/resources', data, callback);
    };

    proto.resourceGet = function resourceGet(slug, callback) {
        return this._projectGet('/resource/' + slug, callback);
    };

    proto.resourceDelete = function resourceDelete(slug, callback) {
        return this._projectDelete('/resource/' + slug, callback);
    };

    proto.resourcePut = function resourcePut(slug, data, callback) {
        return this._projectPut('/resource/' + slug, data, callback);
    };

    proto.resourceContentGet = function resourceContentGet(slug, callback) {
        return this._projectGet('/resource/' + slug + '/content', callback);
    };

    proto.resourceContentPut = function resourceContentPut(slug, data, callback) {
        return this._projectPut('/resource/' + slug + '/content', {content: JSON.stringify(data)}, callback);
    };
};