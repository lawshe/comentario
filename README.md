# Mention User

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing
Clone the repository
```
$ git clone https://github.com/lawshe/mention-user.git
$ cd mention-user
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
