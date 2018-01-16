'use strict';

import Promise from 'bluebird';
import {indexBy, reduce} from 'lodash';
import prestations from './prestations.json';

var prestationsById = indexBy(prestations, 'id');

export function index(req, res) {
  return res.json(prestations);
}

export function populateAndSortPrestations(request) {
  return new Promise(resolve => {
    if (!request) {
      return resolve(null);
    }

    if (request.constructor.name === 'model') {
      request = request.toObject();
    }

    request.detailPrestations = request.prestations.map(function(value) {
      var prestation = prestationsById[value.code];
      prestation.precision = value.precision;
      return prestation;
    })

    resolve(request);
  });
}
