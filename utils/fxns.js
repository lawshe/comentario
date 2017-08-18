import usersData from '../data/sorted-usernames';

const getLastWord = (text) => {
  return text.split(' ').pop().toLowerCase();
}

const findUser = (inputText) => {
  // This is run after each text input change
  // Only search for users based on last word in input, when last word is more than 1 character
  // Return only 3 user suggestions max
  let userResults = [];
  let lastWord = getLastWord(inputText).toLowerCase();

  if (lastWord.trim() !== '' && lastWord.length > 1) {
    lastWord = lastWord.replace('@', '');
    const regexPtn = '^' + lastWord + '[a-zA-Z0-9\\s]+';
    usersData.forEach((user, index) => {
      if (userResults.length < 3) {
        let added = false;
        for (let [key, value] of Object.entries(user)) {
          if (!added && key === 'username' || !added &&  key === 'name') {
            value = value.toLowerCase();
            if (value.match(regexPtn)) {
              added = true;
              userResults.push(user);
            }
          }
        }
      }
    });
  }

  return userResults;
}

const includeUser = (inputText, username) => {
  const textArr = inputText.split(' ');
  textArr.pop();
  return textArr.join(' ') + ' @' + username + ' ';
}

const prettyDate = (date) => {
  let dayPeriod = 'am';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  if (hours > 12) {
    dayPeriod = 'pm';
    hours = hours - 12;
  }
  let min = date.getMinutes();
  min = (min < 10 ? '0' : '')  + min;

  return month + ' ' + day + ', ' + year + ' at ' + hours + ':' + min + dayPeriod;
}

export default {
  findUser,
  getLastWord,
  includeUser,
  prettyDate
}
