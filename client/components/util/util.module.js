'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('tpfullAngular2App.util', [])
  .factory('Util', UtilService)
  .name;
