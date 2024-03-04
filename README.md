# Moбильное приложение на React Native

Для сборки в режиме разработки выполнить следующие действия

1. Установить на телефон (подойдет и ios, и android, приложение кроссплатформенное) приложение Expo, авторизоваться в нем

2. Скачать проект, поставить зависимости, далее выполнить команду в терминале:

```shell script
  npx expo start
```

3. В терминале появится QR code, отсканировать его камерой / камерой через приложение Expo

4. Через несколько секунд на телефоне запустится проект, при обновлении кода происходит автоматическое обновление приложения

5. В первой редакции приложения можно увидеть полный список статей, а также перейти на конкретную статью

![Knit Application]("logo.svg")

# Knit Web Application

[![pipeline status](https://gitlab.com/sourcefit/knit-web-application/badges/master/pipeline.svg)](https://gitlab.com/sourcefit/knit-web-application/-/commits/master)
[![coverage report](https://gitlab.com/sourcefit/knit-web-application/badges/master/coverage.svg)](https://gitlab.com/sourcefit/knit-web-application/-/commits/master)

## Getting Started

This is the source code for the Knit Web Application.

## Installation

We highly recommend using [Docker](https://www.docker.com) for running the Knit Web Application. But if you prefer to installing the
dependencies yourself then go to the [manual installation](docs/MANUAL_INSTALLATION.MD) page.

- Clone the repository using SSH.
  ```shell script
  git clone git@gitlab.com:sourcefit/knit-web-application.git
  ```
  or using HTTPS
  ```shell script
  git clone https://gitlab.com/sourcefit/knit-web-application.git
  ```
- Go to the repository directory.
  ```shell script
  cd knit-web-application/
  ```
- Build Knit Web docker images.
  ```shell script
  docker-compose build
  ```
- Install Knit Web Node dependencies.
  ```shell script
  docker-compose run --rm -T npm install
  ```
- Create your own environment file.
  ```shell script
  cp .env.dist .env
  ```
- Open the .env file and provide a valid [Google Recaptcha](https://www.google.com/recaptcha) Key in the APP_RECAPTCHA_SITE_KEY entry.
  This is to prevent the "ReCaptcha error: No key provided" error from showing up.
  `text
        APP_ENV=local
        APP_HOST=0.0.0.0
        APP_PORT=3000
        APP_RECAPTCHA_SITE_KEY=
        CDN_URL=http://localhost:9000
        API_URL=http://localhost:8000/v1/api
    `

- Start all Knit Web containers as daemons. It will automatically start once your computer fully boots.
  ```shell script
  docker-compose up -d knit-web
  ```

## Using installation script via shell terminal

- If your operating system supports shell scripts. You can run this installation script:
  ```shell script
  sh install.sh
  ```

## Manual Installation

- Download and setup the local development environment by cloning the git repository and installing the NPM packages:

  ```shell script
  git git@gitlab.com:sourcefit/knit-web-application.git
  cd knit-web-application
  npm install
  ```

  If error in npm install, some new windows operating system requires you to install phython and C++ package

  ```
  npm install --global windows-build-tools

  ```

## Other Docker utility containers.

- Start Knit Web containers in the foreground.
  ```shell script
  docker-compose up knit-web
  ```
- Stops all running Knit Web containers.
  ```shell script
  docker-compose down
  ```
- Restart all running Knit Web containers.
  ```shell script
  docker-compose restart
  ```
- Run node scripts.
  ```shell script
  docker-compose run --rm -T npm <command>
  ```
- Install node dependencies.
  ```shell script
  docker-compose run --rm -T npm install
  ```
- Run component testing.
  ```shell script
  docker-compose run --rm -T npm run test
  ```

## Writing tests

Vue component testing is placed under **test** directory and has **.spec.js** extension.

```text
pages/
  index.vue
components/
  my-component.vue
test/
  pages/
      index.spec.js
  components/
      my-component.spec.js
```

Component test format

```javascript
/**
 * Always use shallowMount because to isolate the component
 */
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders is vue instance', () => {
    /**
     * mount the component to be tested
     * using shallowMount
     */
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
```

Example component test

```shell script
function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

## References

- [Vue Component Testing](https://vue-test-utils.vuejs.org/)
- [Jest Matchers](https://jestjs.io/docs/en/expect)

## Built With

- [Node 14.15.4](https://www.nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [NuxtJS](https://nuxtjs.org) - Web Framework
- [Jest](https://jestjs.io/) - Testing Framework

## Contributors

- [@erickson](https://gitlab.com/erickson.sourcefit) - Lead Developer
- [@chinot1](https://gitlab.com/chinot1) - Senior Developer
- [@paulobasilio](https://gitlab.com/paulobasilio) - Developer
- [@assyrahSF](https://gitlab.com/assyrahSF) - Senior Front-End Developer
- [@jerome.sourcefit](https://gitlab.com/jerome.sourcefit) - Senior Front-End Developer
- [@verdelmanzano](https://gitlab.com/verdelmanzano) - Senior Full Stack Developer
- [@viktor.dimalanta](https://gitlab.com/viktor.dimalanta) - Senior Full Stack Developer
- [@jerimemoreno](https://gitlab.com/jerome.sourcefit) - Senior Full Stack Developer

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/sourcefit/knit-web-application/tags).
