const lint = require('@commitlint/lint');
const {rules} = require('./');

test('should support subjects starting with emoji', async () => {
  const {valid, warnings} = await lint('test: 🤖 improve testing', rules);

  expect(valid).toBe(true);
  expect(warnings).toEqual([]);
});

test('should support a mol full complete message', async () => {
  const message = `fix: remove setConfig method

Remove setConfig method that was clashing with global configuration
handler and preventing other components configuration reading

affects: @mol/videojs-vast-vpaid

BREAKING CHANGE: The setConfig method has been removed.

Issues: MOL-4321`;

  const {valid, warnings} = await lint(message, rules);

  expect(valid).toBe(true);
  expect(warnings).toEqual([]);
});

test('should allow github multiple authors commit message', async () => {
  const message = `fix: allow multiple authors

Message body, here will be the body of the message


Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>`;

  const {valid, warnings} = await lint(message, rules);

  expect(valid).toBe(true);
  expect(warnings).toEqual([]);
});

test('should allow a mol full complete message with github multiple authors commit message', async () => {
  const message = `fix: allow multiple authors

Remove setConfig method that was clashing with global configuration
handler and preventing other components configuration reading

affects: @mol/videojs-vast-vpaid

BREAKING CHANGE: The setConfig method has been removed.

Issues: MOL-4321

Co-authored-by: name <name@example.com>
Co-authored-by: another-name <another-name@example.com>`;

  const {valid, warnings} = await lint(message, rules);

  expect(valid).toBe(true);
  expect(warnings).toEqual([]);
});
