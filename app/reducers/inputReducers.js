import { UPDATE_TEXT } from '../actions/actionTypes';
import fxns from '../../utils/fxns';

const initialState = {
  input_text: '',
  matched_user: []
};

export default function inputReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT: {
      const matched_users = fxns.findUser(action.input_text);
      return Object.assign({}, state, { input_text: action.input_text, matched_users });
    }
    default:
      return state;
  }
}
