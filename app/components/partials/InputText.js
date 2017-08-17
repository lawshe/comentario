import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../actions/actionCreators';
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
    }
  }
}

class TextInput extends React.Component {

  componentDidMount() {
    this.props.onTextChange('');
    $('.tooltipped').tooltip({delay: 50});
  }

  handleTextChange() {
    const textValue = document.getElementById('input-el').value;
    this.props.onTextChange(textValue);
  }

  render() {
    const usersJsx = this.props.matchedUsers && this.props.matchedUsers.length > 0 ? (
      <ul>
        {this.props.matchedUsers.map((user, index) => {
          return (
            <li key={index}>
              <div className="chip">
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
