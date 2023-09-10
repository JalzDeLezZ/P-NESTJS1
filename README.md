<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="70" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h2 align="center"><b>Basic Backend</b></h2>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Utils

[• HTTP Status Code](https://http.cat/)
[• Compare Project](https://github.com/platzi/fundamentos-nestjs/tree/18-step)
[• ERROR LINE SECUENCE](https://bobbyhadz.com/blog/eslint-delete-cr-prettier)
[• ENV VARIABLES](https://docs.nestjs.com/techniques/configuration)

## Dependencies

<ul>
  <li>class-validator</li>
  <li>class-transformer</li>
  <li>@nestjs/mapped-types</li>
</ul>

## Commands

```bash
# install
$ npm install
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod

# lint
$ npm run lint -- --fix

# env variables
$ NODE_ENV=prod npm run start:dev


# generate controller
$ nest g controller controllers/<name> --no-spec --flat
# generate service
$ nest g service services/<name> --no-spec --flat
# generate pipe
$ nest g pipe pipes/<name> --no-spec --flat

# install nestjs and create project
501  node --version
502  npm i -g @nestjs/cli
503  nest --version
504  nest --help
505  nest new platzi-store
506  mkdir backend-nestjs
507  mv platzi-store backend-nestjs/
508  history

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
