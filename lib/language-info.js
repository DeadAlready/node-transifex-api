'use strict';

module.exports = function addLanguageInfoFn(proto) {

    proto.languagesInfoGet = function (callback) {
        return this._get('/languages', callback);
    };

    proto.languageInfoGet = function (slug, callback) {
        return this._get('/language/' + slug, callback);
    };
};