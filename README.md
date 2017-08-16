# React Comienzo
A starter app using:
- [Express](http://expressjs.com/)
- [Jest](https://facebook.github.io/jest/)
- [Materialize](http://materializecss.com/)
- [Node](https://nodejs.org/en/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)

The app has 2 routes: `/` and `/accessibility`. The homepage includes a [parallax](https://en.wikipedia.org/wiki/Parallax), which can be disabled by the user in `/accessibility`.

A [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is included, but in order to use you must include an SSL certificate. Free certificates are available at [Let's Encrypt](https://letsencrypt.org/). Store `key.pem` and `cert.pem` in root.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing
Clone the repository
```
$ git clone https://github.com/lawshe/react-comienzo.git
$ cd react-comienzo
$ npm install
```

### Running
```
$ npm run dev
```
Go to http://localhost:8080/ in your browser.

## Testing
Testing redux action creators and reducers using [Jest](https://facebook.github.io/jest/). Test files are in `\__tests__`. To run tests,
```
$ npm test
```

## Production
Build for production,
```
$ npm run build
```
Running in production
```
$ npm start
```

### Customizing
Favicon and icons are stored in `/public/images/icons`. Google analytics can be added in `/config-variables.js`.

## To Do
- Add tests for components
