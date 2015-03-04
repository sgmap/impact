'use strict';

var moment = require('moment');
var _ = require('lodash');
var VieQuotidienne = require('./vie_quotidienne.constant');
var VieScolaire = require('./vie_scolaire.constant');
var VieAuTravail = require('./vie_au_travail.constant');
var SituationsParticulieres = require('./situations_particulieres.constant');
var Renouvellement = require('./renouvellement.constant');
var Identite = require('./identite.constant');
var Autorite = require('./autorite.constant');
var ContactPartenaire = require('./contact_partenaire.constant');
var Aidant = require('./aidant.constant');

var sections = {
  'vie_quotidienne': VieQuotidienne.all,
  'vie_scolaire': VieScolaire.all,
  'vie_au_travail': VieAuTravail.all,
  'situations_particulieres': SituationsParticulieres.all,
  renouvellement: Renouvellement.all,
  identite: Identite.all,
  autorite: Autorite.all,
  'contact_partenaire': ContactPartenaire.all,
  aidant: Aidant.all
};

exports.show = function(req, res) {
  var questions = sections[req.params.sectionId];
  return res.json(questions);
};
