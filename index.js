/*
 * - footer-leading-blank removed warning since it causes warning when using
 *   breaking change and/or issues
 *
 * - subject-case sentence case was removed since it breaks when using emoji
 */

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [0, 'always'],
    'header-max-length': [2, 'always', 50],
    'scope-empty': [2, 'always'],
    'subject-case': [
      2,
      'never',
      ['start-case', 'pascal-case', 'upper-case']
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
