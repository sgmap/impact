'use strict';

angular.module('impactApp')
  .constant('actionTypes', {
    creation: {
      label: 'Création',
      fa: 'plus',
    },
    submit: {
      label: 'Transmission de la demande',
      fa: 'send',
    },
    document_added: {
      label: 'Ajout de document',
      fa: 'upload',
    },
    document_removed: {
      label: 'Supression de document',
      fa: 'trash',
    },
    document_validated: {
      label: 'Validation de document',
      fa: 'thumbs-up',
    },
    document_refused: {
      label: 'Refus de document',
      fa: 'thumbs-down',
    },
    update_answers: {
      label: 'Mise à jour des réponses',
      fa: 'edit',
    },
    assign_sector: {
      label: 'Assignation à un secteur',
      fa: 'bullseye',
    },
    change_status: {
      label: 'Changement de banette',
      fa: 'folder',
    },
    enregistrement: {
      label: 'Enregistrement',
      fa: 'save',
    }
  });
