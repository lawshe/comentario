import * as actions from '../app/actions/actionCreators';
import * as types from '../app/actions/actionTypes';
import reducer from '../app/reducers/index'

// Begin accessibility tests
describe('accessibility actions', () => {
  it('should create an action to toggle parallax', () => {
    const expectedAction = {
      type: types.TOGGLE_PARALLAX
    };
    expect(actions.toggleParallax()).toEqual(expectedAction)
  });
});

describe('accessibility reducers', () => {
  it('should return the initial state', () => {
    expect(reducer.accessibility(undefined, {})).toEqual({
      parallax: true
    });
  });

  it('should toggle the initial state', () => {
    expect(reducer.accessibility(undefined, {
      type: types.TOGGLE_PARALLAX
    })).toEqual({
      parallax: false
    });
  });
});
// End accessibility tests

// Begin input tests
describe('input actions', () => {
  it('should send text', () => {
    const input_text = 'A robot may not injure a human being';
    const expectedAction = {
      type: types.UPDATE_TEXT,
      input_text
    };
    expect(actions.updateText(input_text)).toEqual(expectedAction)
  });
  it('should send username', () => {
    const username = 'pturner0';
    const expectedAction = {
      type: types.INCLUDE_USER,
      username
    };
    expect(actions.includeUser(username)).toEqual(expectedAction)
  });
});

describe('input reducers', () => {
  it('should return the initial state', () => {
    expect(reducer.input(undefined, {})).toEqual({
      input_text: '',
      matched_users: []
    });
  });

  it('should update the text', () => {
    const input_text = 'A robot must obey the orders given it by human beings';
    expect(reducer.input(undefined, {
      type: types.UPDATE_TEXT,
      input_text: input_text
    })).toEqual({
      input_text,
      matched_users: []
    });
  });

  it('should append @username', () => {
    const username = 'pturner0';
    expect(reducer.input(undefined, {
      type: types.INCLUDE_USER,
      username
    })).toEqual({
      input_text: ' @' + username + ' ',
      matched_users: []
    });
  });
});
// End input tests
