module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'body-case': [2, 'always', 'lower-case'],
    'footer-case': [2, 'always', 'lower-case']
  }
}