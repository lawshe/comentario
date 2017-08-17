import { INCLUDE_USER, TOGGLE_PARALLAX, UPDATE_TEXT } from './actionTypes.js'

module.exports = {
  includeUser(username) {
    return {
      type: INCLUDE_USER,
      username
    }
  },
  toggleParallax() {
    return {
      type: TOGGLE_PARALLAX
    };
  },
  updateText(txt) {
    return {
      type: UPDATE_TEXT,
      input_text: txt
    }
  }
}
