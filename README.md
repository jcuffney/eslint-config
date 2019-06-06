# eslint-config

[![CircleCI][circle-ci-badge]][circle-ci-url]

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

| config       | extends              |
|--------------|----------------------|
| `node`       | `eslint:recommended` |
| `node-test`  | `eslint:recommended` |`
| `react`      | `eslint:recommended` |`
| `react-test` | `eslint:recommended` |

<!-- Markdown link & img dfn's -->
[circle-ci-badge]: https://circleci.com/gh/jcuffney/cuffney.com.svg?style=svg
[circle-ci-url]: https://circleci.com/gh/jcuffney/cuffney.com