# React Timer and Countdown Application

> React timer app using Babel, Sass, Webpack, Zurb Foundation, and Karma/Mocha for testing

This app was the second React application of Andrew Mead's [The Complete
React Web App Developer Course](https://www.udemy.com/the-complete-react-web-app-developer-course/). (The course is no longer available on udemy, you can find [the updated version](https://www.udemy.com/the-complete-nodejs-developer-course-2/) only.)

In the timer app you can click a `start` button to kick the timer off and it updates a clock every second. You can click the `pause` button to pause and start again to continue where you left off, and the `clear` button to set the clock to zero.

The countdown application is available in another tab (using `react-router`). We have an `input` field where we can enter the time in seconds we want to count down from and a `start` button to start the timer. You can click the `pause` button to pause where you're currently at and start where you left off.

![Timer](/images/preview-timer.gif?raw=true&sanitize=true)
![Countdown](/images/preview-countdown.gif?raw=true&sanitize=true)

## Install and Build

You need to have either [`yarn`](https://yarnpkg.com/lang/en/docs/install/) or [`npm`](https://www.npmjs.com/) installed on your computer.

#### Clone this repo

```bash
git clone https://github.com/zsoltime/udemy-react-timer.git <new-folder-name>
cd <new-folder-name>
```

#### Install dependencies

```bash
yarn
# OR
npm install
```

#### Build production bundle

It builds the app to the `public` folder. It creates the JavaScript bundle, and uglifies JS - ready to deploy.

```bash
yarn build
# OR
npm run build
```

#### Start dev server

It starts an Express.js server. Open [http://localhost:3000](http://localhost:3000) to view it in browser.

```bash
yarn start
# OR
npm start
```

#### Run tests

It runs unit tests with Karma and Mocha.

```bash
yarn test
# OR
npm test
```
