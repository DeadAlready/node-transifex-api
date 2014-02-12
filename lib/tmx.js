'use strict';

module.exports = function addTmxFn(proto) {

    proto.tmxGet = function tmxGet(callback) {
        return this._projectGet('/tm/exchange', callback);
    };

    proto.tmxPut = function tmxPut(data, callback) {
        return this._projectPut('/tm/exchange', data, callback);
    };
};