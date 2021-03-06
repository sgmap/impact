'use strict';

angular.module('impactApp').controller('DemandeCtrl', function(
  $modal, $http, toastr, $anchorScroll, $cookies,
  User, currentUser, currentMdph, RequestResource,
  DemandeService, profile, demande) {

  this.currentUser = currentUser;
  this.currentMdph = currentMdph;
  this.profile = profile;
  this.demande = demande;

  this.token = $cookies.get('token');
  this.$anchorScroll = $anchorScroll;
  this.prestationsCompletion = () => DemandeService.getPrestationCompletion(demande) ? 'complete' : null;
  this.documentCompletion = () => DemandeService.getDocumentCompletion(demande) ? 'complete' : 'error';
  this.estAdulte = DemandeService.estAdulte(demande);
  this.representantObligatoire = DemandeService.representantObligatoire(demande);
  this.autoriteObligatoire = DemandeService.autoriteObligatoire(demande);

  if (currentUser.unconfirmed === true) {
    User.get(currentUser._id).$promise
    .then(function(user) {
      currentUser.unconfirmed = user.unconfirmed;
    });
  }

  this.getFiles = () => {
    var files = [];
    angular.forEach(demande.data.documents.obligatoires, function(group) {
      angular.forEach(group.documentList, function(doc) {
        doc.type = group.documentType.label;
        files.push(doc);
      });
    });

    angular.forEach(demande.data.documents.complementaires, function(group) {
      angular.forEach(group.documentList, function(doc) {
        doc.type = group.documentType.label;
        files.push(doc);
      });
    });

    return files;
  };

  this.sendRequest = () => {
    const missingSections = DemandeService.getMissingSection(demande, currentUser);

    if (missingSections.indexOf('beneficiaire') !== -1) {

      $anchorScroll(missingSections[0]);
      toastr.error('Vous n\'avez pas fini de remplir la section « Bénéficiaire ».', 'Erreur');
      missingSections.forEach((sectionId) => {
        this.options[sectionId].error = true;
      });

      return;
    }

    if (missingSections.length > 0) {
      $anchorScroll(missingSections[0]);
      toastr.error('Vous n\'avez pas fini de remplir les parties obligatoires de ce profil.', 'Erreur');
      missingSections.forEach((sectionId) => {
        this.options[sectionId].error = true;
      });

      return;
    }

    let _this = this;
    $modal.open({
      templateUrl: 'app/demande/demande-preview-modal.html',
      size: 'lg',
      controller($modalInstance, DemandeService, $state) {
        this.demande = demande;
        this.profile = profile;
        this.mdph = currentMdph;
        this.token = _this.token;
        this.files = _this.getFiles();

        this.ok = function() {
          return DemandeService
          .postAction(this.demande, {
            id: 'submit',
            mdph: this.mdph.zipcode,
          })
          .then(() => {
            $state.go('demande', {}, {reload: true});
            $modalInstance.dismiss();
          });
        };

        this.cancel = function() {
          $modalInstance.dismiss();
        };
      },

      controllerAs: 'demandePreviewModalCtrl',
    });
  };

  this.options = {
    beneficiaire: {
      title: 'Bénéficiaire',
      icon: 'fa-user',
      model: 'identites.beneficiaire',
      mandatory: true,
      action: {
        sref: 'demande.beneficiaire'
      }
    },

    autorite: {
      title: 'Autorité parentale',
      icon: 'fa-users',
      model: 'identites.autorite',
      mandatory: true,
      action: {
        sref: 'demande.autorite'
      }
    },

    representant: {
      title: 'Représentant légal',
      icon: 'fa-users',
      model: 'identites.representant',
      mandatory: true,
      action: {
        sref: 'demande.representant'
      }
    },

    autre: {
      title: 'Personne vous aidant dans cette démarche',
      model: 'identites.autre',
      icon: 'fa-users',
      action: {
        sref: 'demande.autre'
      }
    },

    vieQuotidienne: {
      title: 'Vie quotidienne',
      model: 'vie_quotidienne',
      icon: 'fa-home',
      mandatory: true,
      action: {
        sref: 'demande.vie_quotidienne'
      }
    },

    documents: {
      title: 'Documents',
      model: 'documents',
      icon: 'fa-file',
      mandatory: true,
      action: {
        sref: 'demande.documents'
      }
    },

    prestations: {
      title: 'Expression des demandes de droits et prestations',
      model: 'prestations',
      icon: 'fa-list',
      action: {
        sref: 'demande.prestations'
      }
    },

    vieScolaire: {
      title: 'Vie scolaire ou étudiante',
      model: 'vie_scolaire',
      icon: 'fa-university',
      action: {
        sref: 'demande.vie_scolaire'
      }
    },

    vieTravail: {
      title: 'Vie au travail',
      model: 'vie_au_travail',
      icon: 'fa-industry',
      action: {
        sref: 'demande.vie_au_travail'
      }
    },

    aidant: {
      title: 'Vie de votre aidant familial',
      icon: 'fa-male',
      model: 'aidant',
      action: {
        sref: 'demande.aidant.situation.nom_aidant'
      }
    },

    particulieres: {
      title: 'Situations particulières',
      model: 'situations_particulieres',
      icon: 'fa-warning',
      action: {
        sref: 'demande.situations_particulieres'
      }
    },

    unconfirmed: {
      title: 'Confirmer votre compte mail',
      model: 'mail',
      icon: 'fa-envelope',
      mandatory: true,
      action: {
        sref: 'demande.unconfirmed'
      }
    },
  };

});
