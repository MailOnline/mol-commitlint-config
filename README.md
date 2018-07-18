[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# mol-commitlint-config
[commitlint](https://github.com/marionebl/commitlint) configuration for [mol-conventional-changelog](https://github.com/MailOnline/mol-conventional-changelog)

## Setup

``sh
# Install commitlint cli and mol commitlint config
npm install --save-dev mol-commitlint-config @commitlint/cli

# Configure commitlint to use mol commitlint config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
``

To lint commits before they are created you can use the 'commitmsg' hook as described [here](https://github.com/typicode/husky/blob/master/HOOKS.md#hooks)

``json
{
  "scripts": {
      "commitmsg": "commitlint -E GIT_PARAMS"
    }
}
```

**Detailed Setup instructions**

* [Local setup](http://marionebl.github.io/commitlint/#/guides-local-setup) - Lint messages on commit with husky
* [CI setup](http://marionebl.github.io/commitlint/#/guides-ci-setup) - Lint messages during CI builds


## Commit Message Format

* A commit message consists of a **header**, **body** and **footer**.
* The header has a **type** and a **subject**:

```
{{type}}: {{subject}}
<BLANK LINE>
{{body}}
<BLANK LINE>
{{breaking changes}}
<BLANK LINE>
{{footer}}
```

The **header** is the only mandatory part of the commit message.

The first line (type + subject) is limited to 50 characters **[enforced]**

Any other line should be limited to 72 character **[automatic wrapping]**

This allows the message to be easier to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

* `feat`: A new feature.
* `fix`: A bug fix.
* `docs`: Documentation only changes.
* `style`: Markup-only changes (white-space, formatting, missing semi-colons, etc).
* `refactor`: A code change that neither fixes a bug or adds a feature.
* `perf`: A code change that improves performance.
* `test`: Adding or updating tests.
* `chore`: Build process or auxiliary tool changes.
* `ci`: CI related changes.

### Subject

The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* No dot (.) at the end.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Affects [only on [lerna](https://lernajs.io/) environments]

Select the packages the commit affected.

### Breaking Changes

**Breaking Changes** must start with the words `BREAKING CHANGE: `.

### Footer

The footer is the place to reference any tasks related to this commit.
