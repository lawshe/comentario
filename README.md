# Comentario

A text input that will suggest users to include while typing. Input text is handled via redux and on change the state is updated. If more than 2 characters in the last word of the input then users are searched. When suggestions are found, pressing `enter` key or clicking the user in suggestion list will update the text to include `@username`.  

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing
Clone the repository
```
$ git clone https://github.com/lawshe/comentario.git
$ cd comentario
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
- When deleting text via backspace button, if username, then remove entire username
- Improve user suggestions. Data is sorted by user.username but user.name is also being used to match the input text
- Improve UI when user suggestions overlap submit button
