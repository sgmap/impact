'use strict';

/* jshint multistr: true */

angular.module('impactApp').constant('travail', [
  {
    model: 'conditionTravail',
    titleDefault: 'Avez-vous actuellement un emploi ?',
    titleRep: 'A-t-<%= pronoun %> actuellement un emploi ?',
    type: 'radio',
    answers: [
      {
        'labelDefault': 'Oui',
        'value': true
      },
      {
        'labelDefault': 'Non',
        'value': false
      }
    ]
  },
  {
    model: 'milieuTravail',
    titleDefault: 'Où êtes-vous employé ?',
    titleRep: 'Où est-<%= pronoun %> employé<%= fem %> ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'En milieu ordinaire',
        value: 'ordinaire'
      },
      {
        labelDefault: 'En entreprise adaptée',
        value: 'adaptee'
      },
      {
        labelDefault: 'En milieu protégé (Etablissements et services d’aide par le travail - ESAT)',
        value: 'etablissement'
      }
    ]
  },
  {
    model: 'typeTravail',
    titleDefault: 'Quel est votre type d\'emploi ?',
    titleRep: 'Quel est son type d\'emploi ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'CDI',
        value: 'cdi'
      },
      {
        labelDefault: 'CDD',
        value: 'cdd'
      },
      {
        labelDefault: 'Interim',
        value: 'interim'
      },
      {
        labelDefault: 'Contrat aidé',
        value: 'contrat_aide'
      },
      {
        labelDefault: 'Travailleur indépendant',
        value: 'independant'
      }
    ]
  },
  {
    model: 'employeur',
    titleDefault: 'Qui est votre employeur ?',
    titleRep: 'Qui est son employeur ?',
    type: 'text'
  },
  {
    model: 'nomPoste',
    titleDefault: 'Quel est le nom de votre poste ?',
    titleRep: 'Quel est le nom de son poste ?',
    placeholder: 'Nom du poste',
    type: 'text'
  },
  {
    model: 'temps',
    titleDefault: 'Votre emploi est-il a temps complet ou partiel ?',
    titleRep: 'Son emploi est-il a temps complet ou partiel ?',
    type: 'radio',
    answers: [
      {
        'labelDefault': 'Temps complet',
        'value': true
      },
      {
        'labelDefault': 'Temps partiel',
        'value': false
      }
    ]
  },
  {
    model: 'heures',
    titleDefault: 'Quellle est votre durée de travail par semaine ?',
    titleRep: 'Quellle est sa durée de travail par semaine ?',
    type: 'text',
    placeholder: 'Durée de travail (en heures/semaine)'
  },
  {
    model: 'adapte',
    titleDefault: 'Votre emploi est-il adapté à votre handicap ?',
    titleRep: 'Son emploi est-il adapté à son handicap ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'Non',
        value: false,
        detailUrl: 'components/detail/precisez.html',
        detailModel: 'adapteDetail'
      },
      {
        labelDefault: 'Oui',
        value: true
      }
    ]
  },
  {
    model: 'difficultes',
    titleRep: 'Quelles sont les difficultées liées à son handicap ?',
    titleDefault: 'Quelles sont les difficultées liées à votre handicap ?',
    type: 'text'
  },
  {
    model: 'amenagement',
    titleRep: 'Des aménagements ont-ils été réalisés sur son poste de travail ?',
    titleDefault: 'Des aménagements ont-ils été réalisés sur votre poste de travail ?',
    type: 'radio',
    answers: [
      {
        labelDefault: 'Non',
        value: false
      },
      {
        labelDefault: 'Oui',
        value: true,
        detailUrl: 'components/detail/precisez.html',
        detailModel: 'amenagementDetail'
      }
    ]
  },
  {
    titleDefault: 'Etes-vous actuellement en arrêt de travail ?',
    titleRep: 'Est-<%= pronoun %> actuellement en arrêt de travail ?',
    model: 'arretDeTravail',
    type: 'radio',
    answers: [
      {
        'labelDefault': 'Non',
        'value': false
      },
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_date.html',
        detailModel: 'arretDeTravailDetail',
        detailLabel: 'Depuis quand ?'
      }
    ]
  },
  {
    titleRep: 'Touche-t-<%= pronoun %> des indemnités journalières ?',
    titleDefault: 'Touchez vous des indemnités journalières ?',
    model: 'indemniteJournaliere',
    type: 'radio',
    answers: [
      {
        labelDefault: 'Non',
        value: false
      },
      {
        labelDefault: 'Oui',
        value: true,
        detailUrl: 'components/detail/precisez_date.html',
        detailModel: 'indemniteJournaliereDetail',
        detailLabel: 'Depuis quand ?'
      }
    ]
  },
  {
    titleRep: 'Est-<%= pronoun %> en arrêt suite à un accident du travail ou une maladie professionnelle ?',
    titleDefault: 'Etes-vous en arrêt suite à un accident du travail ou une maladie professionnelle ?',
    model: 'accidentTravail',
    type: 'radio',
    'answers': [
      {
        'labelDefault': 'Non',
        'value': false
      },
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_date.html',
        detailModel: 'accidentTravailDetail',
        detailLabel: 'Depuis quand ?'
      }
    ]
  },
  {
    titleRep: 'A-t-<%= pronoun %> rencontré un professionnel du service social de la CARSAT ?',
    titleDefault: 'Avez-vous rencontré un professionnel du service social de la CARSAT ?',
    model: 'profesionnelSocial',
    type: 'radio',
    'answers': [
      {
        'labelDefault': 'Non',
        'value': false
      },
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_date.html',
        detailModel: 'profesionnelSocialDetail',
        detailLabel: 'A quelle date ?'
      }
    ]
  },
  {
    titleRep: 'A-t-<%= pronoun %> rencontré le médecin du travail en visite de pré-reprise ?',
    titleDefault: 'Avez-vous rencontré le médecin du travail en visite de pré-reprise ?',
    model: 'medecinTravail',
    type: 'radio',
    'answers': [
      {
        'labelDefault': 'Non',
        'value': false
      },
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_date.html',
        detailModel: 'medecinTravailDetail',
        detailLabel: 'A quelle date ?'
      }
    ]
  },
  {
    titleRep: 'A-t-<%= pronoun %> un ou plusieurs projet(s) professionnel(s) ?',
    titleDefault: 'Avez-vous un ou plusieurs projet(s) professionnel(s) ?',
    model: 'description',
    type: 'radio',
    'answers': [
      {
        'labelDefault': 'Non',
        'value': false
      },
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_big.html',
        detailModel: 'descriptionDetail'
      }
    ]
  },
  {
    titleRep: 'Pour quoi a-t-<%= pronoun %> besoin de soutien ?',
    titleDefault: 'Pour quoi avez-vous besoin de soutien ?',
    model: 'besoinSoutien',
    type: 'checkbox',
    answers:
    [
      {'labelDefault': 'Faire un bilan de capacités professionnelles', model: 'bilan'},
      {'labelDefault': 'Préciser un projet professionnel', model: 'precisions'},
      {'labelDefault': 'Adapter l\'environnement de travail', model: 'environnement'},
      {'labelDefault': 'Accéder à un emploi', model: 'emploi'},
      {'labelDefault': 'Accéder à une formation', model: 'formation'},

      {'labelDefault': 'Autre besoin', model: 'autre', 'detailModel': 'besoinSoutienAutre', detailUrl: 'components/detail/precisez.html'}
    ]
  },
  {
    model: 'structure',
    titleDefault: 'Avez-vous déjà identifié une ou plusieurs structures qui pourraient répondre à vos attentes ?'
  },
  {
    model: 'autresRenseignements',
    titleDefault: 'Autres renseignements concernant votre vie au travail que vous souhaiteriez nous communiquer',
    type: 'text'
  },
  {
    titleRep: 'Est-<%= pronoun %> dans une des situations suivantes ?',
    titleDefault: 'Etes-vous dans une des situations suivantes ?',
    model: 'situationSansEmploi',
    type: 'checkbox',
    answers:
    [
      {
        label: 'Inscrit à pôle emploi',
        model: 'poleEmploi'
      },
      {
        label: 'En formation continue',
        model: 'formation'
      },
      {
        label: 'Etudiant',
        model: 'etudiant'
      }
    ]
  },
  {
    titleRep: 'Est-<%= pronoun %> dans une des situations suivantes ?',
    titleDefault: 'Etes-vous dans une des situations suivantes ?',
    model: 'situationSansEmploi',
    type: 'checkbox',
    answers:
    [
      {
        labelDefault: 'Inscrit à pôle emploi',
        model: 'poleEmploi'
      },
      {
        labelDefault: 'En formation continue',
        model: 'formation'
      },
      {
        labelDefault: 'Etudiant',
        model: 'etudiant'
      }
    ]
  },
  {
    titleRep: 'A-t-<%= pronoun %> déjà travaillé<%= fem %> ?',
    titleDefault: 'Avez-vous déjà travaillé ?',
    type: 'radio',
    model: 'passe',
    'answers': [
      {
        'labelDefault': 'Oui',
        'value': true,
        detailUrl: 'components/detail/precisez_big.html',
        detailModel: 'passeDetail',
        detailLabel: 'Pourquoi êtes-vous actuellement sans emploi et depuis quand ?'
      },
      {
        'labelDefault': 'Non',
        'value': false
      }
    ]
  }
]);
