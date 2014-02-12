'use strict';

var Transifex = require('./transifex');

module.exports = Transifex;
module.exports.create = function create(opts) {
    return new Transifex(opts);
};