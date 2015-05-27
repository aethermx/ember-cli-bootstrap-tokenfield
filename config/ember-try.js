module.exports = {
  scenarios: [
    {
      name: 'Ember 1.10 with ember-data',
      dependencies: {
        'ember': '1.10.0',
        'ember-data': '1.0.0-beta.15'
      }
    },
    {
      name: 'Ember 1.11.0-beta.5',
      dependencies: {
        'ember': '1.11.0-beta.5'
      }
    },
    {
      name: 'Ember canary',
      dependencies: {
        'ember': 'canary'
      }
    },
    {
      name: 'Ember beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: { // Resolutions are only necessary when they do not match the version specified in `dependencies`
        'ember': 'canary'
      }
    }
  ]
};
