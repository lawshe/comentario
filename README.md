# Comentario

A commenting system that can include mentions to users. The text input will suggest users to include while typing. Input text is handled via [redux](http://redux.js.org/) and on change the state is updated. If 2 or more characters in the last word of the input then users are searched for matches. Clicking a suggested user will autocomplete the input text to include `@username`, or pressing <kbd>enter</kbd> will include the first listed user. Comments can be saved to state by pressing submit button or <kbd>enter</kbd> key (if no suggested users displayed, otherwise <kbd>enter</kbd> key autocompletes). When user lists is displayed, they desired selection can be reached via <kbd>down</kbd> and <kbd>up</kbd> keys, or by clicking the user.

## Data Handling
The input element is in [/app/components/partials/InputText.js](https://github.com/lawshe/comentario/blob/master/app/components/partials/InputText.js) and when changed dispatches action `UPDATE_TEXT` in [/app/reducers/inputReducers.js](https://github.com/lawshe/comentario/blob/master/app/reducers/inputReducers.js). The reducer will use `findUser()` in [/utils/fxns.js](https://github.com/lawshe/comentario/blob/master/utils/fxns.js) to match the last word to either user.username or user.name (when the last word is more than 1 character). This will return 3 users max that match.

When a user suggestion list is displayed, a user can either press <kbd>enter</kbd> or click a user to autocomplete the comment. These actions are handled in [/app/components/partials/InputText.js](https://github.com/lawshe/comentario/blob/master/app/components/partials/InputText.js) and will dispatch action `INCLUDE_USER` in [/app/reducers/inputReducers.js](https://github.com/lawshe/comentario/blob/master/app/reducers/inputReducers.js).

To save comments, press <kbd>enter</kbd> (when user list is not displayed, otherwise this key will autocomplete with selected user) or click the submit button. This will dispatch `SAVE_COMMENT` in [/app/reducers/inputReducers.js](https://github.com/lawshe/comentario/blob/master/app/reducers/inputReducers.js).

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

## Deploying
These instructions will help you deploy to an AWS EC2 instance and assume the instance was already created.

Locally,
```
$ npm run build
```

Commit build changes,
```
$ git push origin master
```

SSH to AWS EC2 instance,
```
$ ssh -i ~/<PATH-TO-PEM-FILE>/<PEM-FILE>.pem <USER>@<PUBLIC-IP>
```
Install node,
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Create website directory,

**You might need to run `sudo mkdir` and `sudo git`**
```
$ cd ~/
$ mkdir www
$ cd www
$ git clone https://github.com/lawshe/comentario
$ cd comentario
```

Create a screen and start app
```
$ screen -S app
$ sudo PORT=80 npm start
```
Detach screen by pressing <kbd>Ctrl</kbd> + <kbd>A</kbd> + <kbd>D</kbd>

## Updating EC2 app
SSH then, reattach screen
```
$ screen -r app
```

Stop previous app version by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>, and then start again,

**You might need to run with sudo**
```
$ PORT=80 npm start
```

Detach screen by pressing <kbd>Ctrl</kbd> + <kbd>A</kbd> + <kbd>D</kbd>

## To Do
- Add tests for components
- When deleting text via backspace button, if username, then remove entire username
- Improve user suggestions. Data is sorted by user.username, but user.name is also being used to match the input text
- Add error message when trying to save empty message
- Allow searching of first and last name together (currently only searching last word in input)
- In user suggestion list, for very small screens and very long names, fix overflow
