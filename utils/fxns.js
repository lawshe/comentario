import usersData from '../data/sorted-usernames';

const getLastWord = (text) => {
  return text.split(' ').pop().toLowerCase();
}

const findUser = (inputText) => {
  // This is run after each text input change
  // Only search for users based on last word in input, when last word is more than 1 character
  // Return only 3 user suggestions max
  let userResults = [];
  let lastWord = getLastWord(inputText);

  if (lastWord.trim() !== '' && lastWord.length > 1) {
    lastWord = lastWord.replace('@', '');
    const regexPtn = '^' + lastWord + '[a-zA-Z0-9]+';

    usersData.forEach((user, index) => {
      if (userResults.length < 3) {
        for (let [key, value] of Object.entries(user)) {
          if (key === 'username' || key === 'name') {
            if (value.match(regexPtn)) {
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

export default {
  findUser,
  getLastWord,
  includeUser
}
