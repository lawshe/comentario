import { UPDATE_TEXT } from '../actions/actionTypes';
import fxns from '../../utils/fxns';

const initialState = {
  input_text: '' // User input
};

export default function accessibilityReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT: {
      return Object.assign({}, state, { input_text: action.input_text });
    }
    default:
      return state;
  }
}
