module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 50],
    'body-max-length': [2, 'always', 72],
    'footer-max-length': [2, 'always', 72],
    'subject-tense': ['present-imperative'],
    'body-tense': ['present-imperative'],
    'footer-tense': ['present-imperative'],
    'scope-empty': [2, 'always'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci'
      ]
    ]
  }
};