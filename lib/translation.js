'use strict';

module.exports = function addTranslationFn(proto) {

    proto.translationGet = function translationGet(resource, lang_code, callback) {
        return this._projectGet('/resource/' + resource + '/translation/' + lang_code, callback);
    };

    proto.translationPut = function translationPut(resource, lang_code, data, callback) {
        return this._projectPut('/resource/' + resource + '/translation/' + lang_code, data, callback);
    };
};