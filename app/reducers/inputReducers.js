import { INCLUDE_USER, SAVE_COMMENT, UPDATE_TEXT } from '../actions/actionTypes';
import fxns from '../../utils/fxns';

const initialState = {
  comments: [],
  input_text: '',
  matched_users: []
};

export default function inputReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT: {
      const matched_users = fxns.findUser(action.input_text);
      return Object.assign({}, state, { input_text: action.input_text, matched_users });
    }
    case INCLUDE_USER: {
      const text_with_user = fxns.includeUser(state.input_text, action.username);
      return Object.assign({}, state, { input_text: text_with_user, matched_users : [] });
    }
    case SAVE_COMMENT: {
      const comments = state.comments.slice();
      const inputText = state.input_text.trim();
      if (inputText) {
        comments.push({
          text: inputText,
          date: action.date
        });
      }

      return Object.assign({}, state, { input_text: '', matched_users : [], comments });
    }
    default:
      return state;
  }
}
