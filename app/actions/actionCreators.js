import { INCLUDE_USER, SAVE_COMMENT, TOGGLE_PARALLAX, UPDATE_TEXT } from './actionTypes.js'

module.exports = {
  includeUser(username) {
    return {
      type: INCLUDE_USER,
      username
    }
  },
  saveComment() {
    return {
      type: SAVE_COMMENT,
      date: new Date()
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
