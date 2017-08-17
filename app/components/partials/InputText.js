import React from 'react';
import { connect } from 'react-redux';
import { includeUser, updateText } from '../../actions/actionCreators';
import glob from 'style';

/**
  *
  * Text Input
  *
  * Includes redux actions
  *
*/

const mapStateToProps = (state) => {
  return {
    inputText: state.input.input_text,
    matchedUsers: state.input.matched_users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (str) => {
      dispatch(updateText(str))
    },
    onUserClick: (username) => {
      dispatch(includeUser(username));
    }
  }
}

class TextInput extends React.Component {

  componentDidMount() {
    this.props.onTextChange('');
    $('.tooltipped').tooltip({delay: 50});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && this.props.matchedUsers[0]) {
      this.props.onUserClick(this.props.matchedUsers[0].username);
    }
  }

  handleTextChange() {
    const textValue = document.getElementById('input-el').value;
    this.props.onTextChange(textValue);
  }

  handleUserClick(username) {
    this.props.onUserClick(username);
  }

  getTextWidth(text) {
    const font = '1rem Helvetica, Arial, sans-serif';
    const canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  render() {
    const cursorLoc = this.getTextWidth(this.props.inputText);
    const usersJsx = this.props.matchedUsers && this.props.matchedUsers.length > 0 ? (
      <ul style={{ left: cursorLoc, position: 'absolute' }}>
        {this.props.matchedUsers.map((user, index) => {
          return (
            <li key={index}>
              <div className={`chip ${glob.chip}`}
                onClick={() => this.handleUserClick(user.username)}
              >
                <img src={user.avatar_url} alt={user.username} />
                {user.username}
              </div>
            </li>
          );
        })}
      </ul>)
    : <span></span>;

    return (
      <div className="card"><div className="card-content">
        <input id="input-el"
          onChange={() => this.handleTextChange()}
          onKeyPress={(e) => this.handleKeyPress(e)}
          placeholder="Write a comment..."
          style={{ marginBottom: 0 }}
          value={this.props.inputText}
        ></input>
        <label htmlFor="input-el" style={{ display: 'none', float: 'left', clear: 'both', width: '100%' }}>Comment</label>
        {usersJsx}
      </div></div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
