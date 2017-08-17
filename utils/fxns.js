import usersData from '../data/data';

const findUser = (inputText) => {
  // This is run after each input change
  // Only search for users based on last word in input, when last word is more than 1 character
  // Return only 3 user suggestions max

  let userResults = [];
  const lastWord = inputText.split(' ').pop().toLowerCase().replace('@', '');
  const regexPtn = '^' + lastWord + '[a-zA-Z0-9]+';

  if (lastWord.trim() !== '' && lastWord.length > 1) {
    usersData.forEach((user, index) => {
      if (userResults.length < 2) {
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

export default {
  findUser,
  includeUser
}
