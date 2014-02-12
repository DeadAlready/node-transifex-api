'use strict';

module.exports = function addProjectFn(proto) {

    proto.projectsGet = function projectsGet(callback) {
        return this._get('/projects', callback);
    };

    proto.projectsPost = function projectsPost(data, callback) {
        return this._post('/projects', data, callback);
    };

    proto.projectGet = function projectGet(slug, callback) {
        if(typeof slug !== 'string') {
            callback = slug;
            slug = this.project;
        }
        return this._get('/project/' + slug, callback);
    };

    proto.projectPost = function projectPost(slug, data, callback) {
        if(typeof slug !== 'string') {
            callback = data;
            data = slug;
            slug = this.project;
        }
        return this._post('/project/' + slug, data, callback);
    };

    proto.projectDelete = function projectDelete(slug, callback) {
        if(typeof slug !== 'string') {
            callback = slug;
            slug = this.project;
        }
        return this._delete('/project/' + slug, callback);
    };
};