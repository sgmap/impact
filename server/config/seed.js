/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Mdph = require('../api/mdph/mdph.model');
var Partenaire = require('../api/partenaire/partenaire.model');
var Request = require('../api/request/request.model');
var async = require('async');

var mdphNord, mdphCalvados, admin, foo, nord, bar, alice, bob, toto, rox, bobRequest, fooRequest;

var deletePartenaires = function(cb) {
  Partenaire.find({}).remove(function() {
    console.log('finished deleting partenaires');
    cb();
  });
};

var deleteUsers = function(cb) {
  User.find({}).remove(function() {
    console.log('finished deleting users');
    cb();
  });
};

var deleteRequests = function(cb) {
  Request.find({}).remove(function() {
    console.log('finished deleting requests');
    cb();
  });
};

var deleteMdphs = function(cb) {
  Mdph.find({}).remove(function() {
    console.log('finished deleting mdphs');
    cb();
  });
};

var createMdphNord = function(cb) {
  Mdph.create({
    id: 'nord',
    name: 'Nord',
    zipcode: '59',
    email: 'rri@octo.com',
    logo: 'logo59.jpg'
  }, function(err, data) {
    mdphNord = data;
    console.log('finished creating mdph nord');
    cb();
  });
};

var createMdphCalvados = function(cb) {
  Mdph.create({
    id: 'calvados',
    name: 'Calvados',
    zipcode: '14',
    email: 'rri@octo.com',
    logo: 'logo14.jpg'
  }, function(err, data) {
    mdphCalvados = data;
    console.log('finished creating mdph calvados');
    cb();
  });
};

var createAdminNord = function(cb) {
  User.create({
    provider: 'local',
    role: 'adminMdph',
    name: 'Nord',
    email: 'nord@nord.com',
    password: 'nord',
    mdph: mdphNord
  }, function(err, data) {
    nord = data;
    console.log('finished creating user nord');
    cb();
  });
};

var createAdminBar = function(cb) {
  User.create({
    provider: 'local',
    role: 'adminMdph',
    name: 'Bar',
    email: 'bar@bar.com',
    password: 'bar',
    mdph: mdphNord
  }, function(err, data) {
    bar = data;
    console.log('finished creating user bar');
    cb();
  });
};

var createFoo = function(cb) {
  User.create({
    provider: 'local',
    name: 'Foo',
    email: 'foo@foo.com',
    password: 'foo',
    requests: []
  }, function(err, data) {
    foo = data;
    if (err) {
      console.log(err);
    }
    console.log('finished creating user foo');
    cb();
  });
};

var createBob = function(cb) {
  User.create({
    provider: 'local',
    name: 'Bob',
    email: 'bob@bob.com',
    password: 'bob',
    requests: []
  }, function(err, data) {
    bob = data;
    if (err) {
      console.log(err);
    }
    console.log('finished creating user bob');
    cb();
  });
};

var createToto = function(cb) {
  User.create({
    provider: 'local',
    name: 'Toto',
    email: 'toto@toto.com',
    password: 'toto',
    requests: []
  }, function(err, data) {
    toto = data;
    if (err) {
      console.log(err);
    }
    console.log('finished creating user Toto');
    cb();
  });
};

var createRox = function(cb) {
  User.create({
    provider: 'local',
    name: 'Rox',
    email: 'rricci@octo.com',
    password: 'rox',
    requests: []
  }, function(err, data) {
    rox = data;
    if (err) {
      console.log(err);
    }
    console.log('finished creating user Rox');
    cb();
  });
};

var createFlo = function(cb) {
  User.create({
    provider: 'local',
    name: 'Florian',
    email: 'flo@flo.com',
    password: 'flo',
    requests: []
  }, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log('finished creating user flo');
    cb();
  });
};

var createAdmin = function(cb) {
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function(err, data) {
    admin = data;
    console.log('finished creating user admin');
    cb();
  });
};

var createAlice = function(cb) {
  User.create({
    provider: 'local',
    role: 'adminMdph',
    name: 'Alice',
    email: 'caen@caen.fr',
    password: 'caen',
    mdph: mdphCalvados
  }, function(err, data) {
    alice = data;
    console.log('finished creating user alice');
    cb();
  });
};

var createFooRequest = function(cb) {
  Request.create({
    formAnswers: {},
    user: foo,
    mdph: mdphNord,
    updatedAt: new Date(),
    step: 'obligatoire',
    opened: true
  }, function(err, data) {
     fooRequest = data;
    console.log('finished creating request foo');
    cb();
  });
};

var createBobOldRequest = function(cb) {
  Request.create({
    formAnswers: {},
    user: bob,
    mdph: mdphCalvados,
    updatedAt: new Date(new Date().setDate(new Date().getDate()-1)), //yesterday
    steps: [
      {
        name: 'reponse',
        state: 'complet'
      }
    ]
  }, function() {
    console.log('finished creating request old bob');
    cb();
  });
};

var createTotoOldRequest = function(cb) {
  Request.create({
    formAnswers: {},
    user: toto,
    mdph: mdphCalvados,
    opened: true,
    requestStatus: 'Complète',
    updatedAt: new Date(new Date().setDate(new Date().getDate()-1)), //yesterday
    steps: [
      {
        name: 'questionnaire',
        state: 'complet'
      },
      {
        name: 'obligatoire',
        state: 'valide'
      },
      {
        name: 'preevaluation',
        state: 'valide'
      },
      {
        name: 'complementaire',
        state: 'valide'
      },
      {
        name: 'evaluation',
        state: 'valide'
      }
    ]
  }, function() {
    console.log('finished creating request old toto');
    cb();
  });
};

var createRoxOldRequest = function(cb) {
  Request.create({
    formAnswers: {},
    user: rox,
    mdph: mdphCalvados,
    opened: true,
    requestStatus: 'Recevable',
    updatedAt: new Date(new Date().setDate(new Date().getDate()-1)), //yesterday
    steps: [
      {
        name: 'questionnaire',
        state: 'complet'
      },
      {
        name: 'obligatoire',
        state: 'valide'
      },
      {
        name: 'preevaluation',
        state: 'en_cours'
      }
    ]
  }, function() {
    console.log('finished creating request old rox');
    cb();
  });
};

var createBobRequest = function(cb) {
  Request.create({
    opened: true,
    user: bob,
    mdph: mdphNord,
    requestStatus: 'Emise',
    formAnswers: {
      'prestations': {
        'aah': {
          'date':'2014-09-08T22:00:00.000Z'
        }
      },
      'contexte': {
        'estRepresentant':true,
        'demandeur': {
           'prenom':'Bobby',
           'sexe':'masculin'
        },
        'mdph': mdphCalvados,
        'nouveauDossier':false,
        'numDossier':true,
        'numeroDossier':'21',
        'raison': {
           'finDeVosDroits':true
        },
        'connaisTaux':true,
        'tauxIncapacite':79,
        'contestationTaux':'stable',
        'dateNaissance':'1981-05-12T22:00:00.000Z',
        'urgences': {
           'domicile':false,
           'formation':true
        },
        'formationDetail':'2014-10-21T22:00:00.000Z'
      },
      'vieQuotidienne': {
        'famille':'parents',
        'logement':'independant',
        'logement_independant':'proprietaire',
        'besoinsVie': {
           'courses':true,
           'habits':true,
           'budget':true,
           'courant':true,
           'repas':true,
           'menage':true
        },
        'besoinsDeplacement': {
           'intraDomicile':true,
           'public':true,
           'transports':true,
           'vacances':true
        },
        'besoinsSocial': {
           'communication':true,
           'proches':true,
           'securite':true,
           'citoyen':true
        },
        'besoinsLieuDeVie': {
           'materiel':true,
           'conduite':true
        },
        'attentesTypeAide': {
           'domicile':true,
           'amenagement':true,
           'financierHandicap':true,
           'mobilite':true,
           'etablissement':true,
           'materiel':true
        },
        'structures': {
           'valeur':false,
           'structures':[
              {
                 'name':'',
                 'contact':false
              }
           ]
        },
        'autresRenseignements':'',
        'objetDemande': {
           'travail':false
        }
      },
      'aidant': {
        'sectionLabel':'Aidant familial',
        'answers': {
           'condition':false
        }
      },
      'envoi':true
    },
    updatedAt: new Date(),
    steps: [
      {
        name: 'questionnaire',
        state: 'complet'
      },
      {
        name: 'obligatoire',
        state: 'en_cours',
        files: [
          { name: 'certificatMedical', state: 'demande' },
          { name: 'carteIdentite', state: 'demande' }
        ]
      }
    ]
  }, function(err, data) {
    bobRequest = data;
    console.log('finished creating request bob');
    cb();
  });
};

var createMarc = function(cb) {
  Partenaire.create({
    email: 'marc@marc.fr',
    certified: 'En attente'
  }, function(err, data) {
    console.log('finished creating user marc');
    cb();
  });
};

var createAnne = function(cb) {
  Partenaire.create({
    email: 'anne@anne.fr',
    certified: 'En attente'
  }, function(err, data) {
    console.log('finished creating user anne');
    cb();
  });
};

var createLeo = function(cb) {
  Partenaire.create({
    email: 'leo@leo.fr',
    certified: 'Certifié'
  }, function(err, data) {
    console.log('finished creating user leo');
    cb();
  });
};

var createJean = function(cb) {
  Partenaire.create({
    email: 'jean@jean.fr',
    certified: 'Refusé'
  }, function(err, data) {
    console.log('finished creating user bobo');
    cb();
  });
};

async.series([
  deleteUsers,
  deleteRequests,
  deleteMdphs,
  deletePartenaires,

  createMdphNord,
  createMdphCalvados,

  createFoo,
  createAdminNord,
  createAdminBar,
  createAlice,
  createBob,
  createFlo,
  createAdmin,
  createToto,
  createRox,

  createMarc,
  createAnne,
  createLeo,
  createJean,

  createBobOldRequest,
  createBobRequest,
  createFooRequest,
  createTotoOldRequest,
  createRoxOldRequest
]);
