/**
 * Created by subhasis on 11/4/16.
 */
'use strict';

var toastr = require('toastr');

var modu = module.exports = angular.module('modules.common', []);

modu.factory('sdNotifier', require('./sdNotifier'));
modu.value('sdToastr', toastr);