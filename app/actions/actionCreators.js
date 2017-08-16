import { TOGGLE_PARALLAX, UPDATE_TEXT } from './actionTypes.js'

module.exports = {
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
