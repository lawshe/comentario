import { TOGGLE_PARALLAX } from '../actions/actionTypes';

const initialState = {
  parallax: true
};

export default function accessibilityReducers(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PARALLAX: {
      const newState = Object.assign({}, state, { parallax: !state.parallax });
      return newState;
    }
    default:
      return state;
  }
}
