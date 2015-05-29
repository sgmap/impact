'use strict';

var _ = require('lodash');
var Utils = require('./utils');

var ou = Utils.ou;
var et = Utils.et;
var getValue = Utils.getValue;
var getValueList = Utils.getValueList;

exports.simulate = function(computed) {
  if (computed.estRenouvellement) {
    if (_.contains(computed.prestations, 'carteInvalidite')) {
      return true;
    }
  }

  return ou([
    et([
      getValue(computed.attentesTypeAide, 'humain'),
      ou( getValueList(computed.besoinsVie, ['hygiene', 'habits', 'repas']) ),
    ]),
    getValue(computed.besoinsDeplacement, 'intraDomicile'),
    getValue(computed.pensionInvalidite, 'mtp'),
    getValue(computed.pensionInvalidite, 'pcrtp')
  ]);
}
