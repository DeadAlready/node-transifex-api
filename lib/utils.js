'use strict';

function isJsonData(data) {
    if(typeof data !== 'object') {
        return true;
    }

    if(data instanceof Buffer || !!data._readableState) {
        return false;
    }

    if(Array.isArray(data)) {
        return !data.some(function (el) {
            return !isJsonData(el);
        });
    }

    return !Object.keys(data).some(function (el) {
        return !isJsonData(data[el]);
    });
}

module.exports.isJsonData = isJsonData;