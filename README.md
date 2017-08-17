# Comentario

A commenting system that can include mentions to users. The text input will suggest users to include while typing. Input text is handled via redux and on change the state is updated. If more than 2 characters in the last word of the input then users are searched for matches. Clicking a suggested user will autocomplete the input text to include `@username`, or pressing <kbd>enter</kbd> will include the first listed user. Comments can be saved to state by pressing submit button or <kbd>enter</kbd> key (if no suggested users displayed, otherwise <kbd>enter</kbd> key autocompletes).

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
- Improve UI when user suggestions overlap submit button
- Add error message when trying to save empty message
