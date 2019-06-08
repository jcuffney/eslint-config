# eslint-config

[![CircleCI][circle-ci-badge]][circle-ci-url]
[![npm version][npm-version-badge]][npm-version-url]

My opinionated ESLint configs for JavaScript/Node projects.

#### 1. Install
```shell
$ npm install --save-dev @cuffney/eslint-config
```

#### 2. Extend
```yaml
# .eslintrc
extends: @cuffney/eslint-config/node
```

#### Configs

| config       | extends                                                  |
|--------------|----------------------------------------------------------|
| `node`       | `eslint-config-standard`                                 |
| `node-test`  | `./node`                                                 |
| `react`      | `eslint-config-standard`, `eslint-config-standard-react` |
| `react-test` | `./react`                                                |
| `react-native` | `eslint:config-standard`                               |
| `react-native-test` | `./react-native`                                  |

<!-- Markdown link & img dfn's -->
[circle-ci-badge]: https://circleci.com/gh/jcuffney/cuffney.com.svg?style=svg
[circle-ci-url]: https://circleci.com/gh/jcuffney/cuffney.com
[npm-version-badge]: http://img.shields.io/npm/v/@cuffney/eslint-config.svg?style=flat
[npm-version-url]: https://npmjs.org/package/@cuffney/eslint-config