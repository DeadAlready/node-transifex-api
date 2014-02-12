'use strict';

module.exports = function addLanguage(proto) {

    proto.languagesGet = function languagesGet(callback) {
        return this._projectGet('/languages', callback);
    };

    proto.languagesPost = function languagesPost(data, callback) {
        return this._projectPost('/languages', data, callback);
    };

    proto.languageGet = function languageGet(slug, callback) {
        return this._projectGet('/language/' + slug, callback);
    };

    proto.languagePut = function languagePut(slug, data, callback) {
        return this._projectPut('/language/' + slug, data, callback);
    };

    proto.languageDelete = function languageDelete(slug, callback) {
        return this._projectDelete('/language/' + slug, callback);
    };

    proto.languageCoordinatorsGet = function languageCoordinatorsGet(slug, callback) {
        return this._projectGet('/language/' + slug + '/coordinators', callback);
    };

    proto.languageCoordinatorsPut = function languageCoordinatorsPut(slug, data, callback) {
        return this._projectPut('/language/' + slug + '/coordinators', callback);
    };

    proto.languageReviewersGet = function languageReviewersGet(slug, callback) {
        return this._projectGet('/language/' + slug + '/reviewers', callback);
    };

    proto.languageReviewersPut = function languageReviewersPut(slug, data, callback) {
        return this._projectPut('/language/' + slug + '/reviewers', callback);
    };

    proto.languageTranslatorsGet = function languageTranslatorsGet(slug, callback) {
        return this._projectGet('/language/' + slug + '/translators', callback);
    };

    proto.languageTranslatorsPut = function languageTranslatorsPut(slug, data, callback) {
        return this._projectPut('/language/' + slug + '/translators', callback);
    };
};