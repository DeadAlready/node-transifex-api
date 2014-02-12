'use strict';

module.exports = function addStatisticsFn(proto) {

    proto.statisticsResourceGet = function statisticsResourceGet(resource, callback) {
        return this._projectGet('/resource/' + resource + '/stats', callback);
    };

    proto.statisticsResourceLanguageGet = function statisticsResourceLanguageGet(resource, language, callback) {
        return this._projectGet('/resource/' + resource + '/stats/' + language, callback);
    };
};