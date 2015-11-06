'use strict';

var _ = require('lodash');

var actions = {
  CREATION: {
    id: 'creation',
    label: 'Création',
    fa: 'plus'
  },
  SUBMIT: {
    id: 'submit',
    label: 'Transmission de la demande',
    fa: 'send'
  },
  DOCUMENT_ADDED: {
    id: 'document_added',
    label: 'Ajout de document',
    fa: 'file'
  },
  UPDATE_ANSWERS: {
    id: 'update_answers',
    label: 'Mise à jour des réponses',
    fa: 'update'
  },
  ASSIGN_SECTOR: {
    id: 'assign_sector',
    label: 'Assignation à un secteur',
    fa: 'assign'
  },
  CHANGE_STATUS: {
    id: 'change_status',
    label: 'Changement de banette',
    fa: 'folder'
  }
};

var actionsById = _.indexBy(actions, 'id');

module.exports = {
  actions: actions,
  actionsById: actionsById
};
