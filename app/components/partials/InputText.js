import React from 'react';
import { connect } from 'react-redux';
import { includeUser, saveComment, updateText } from '../../actions/actionCreators';
import glob from 'style';
import fxns from 'fxns';

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
    },
    onSubmitForm: () => {
      dispatch(saveComment());
    }
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desired: 0
    };
  }

  componentDidMount() {
    this.props.onTextChange('');
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && this.props.matchedUsers && this.props.matchedUsers.length > 0) {
      e.preventDefault();
      this.props.onUserClick(this.props.matchedUsers[this.state.desired].username);
      this.setState({ desired: 0 });
    } else if (e.key === 'Enter') {
      this.props.onSubmitForm();
      this.setState({ desired: 0 });
    } else if (e.keyCode === 40 && this.props.matchedUsers && this.props.matchedUsers.length > 0) {
      e.preventDefault();
      if (this.state.desired < this.props.matchedUsers.length - 1) {
        this.setState({
          desired: this.state.desired + 1
        });
      } else {
        this.setState({ desired: 0});
      }
    } else if (e.keyCode === 38 && this.props.matchedUsers && this.props.matchedUsers.length > 0) {
      e.preventDefault();
      if (this.state.desired > 0) {
        this.setState({
          desired: this.state.desired - 1
        });
      } else {
        this.setState({ desired: this.props.matchedUsers.length - 1});
      }
    }
  }

  handleTextChange() {
    const textValue = document.getElementById('input-el').value;
    this.props.onTextChange(textValue);
  }

  handleUserClick(username) {
    this.props.onUserClick(username);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitForm();
  }

  getTextWidth(text) {
    if (window.innerWidth < 500){
      return 24;
    }
    const font = '1rem Helvetica, Arial, sans-serif';
    const canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  render() {
    const cursorLoc = this.getTextWidth(this.props.inputText);
    const lastWord = this.props.inputText ? fxns.getLastWord(this.props.inputText) : '';
    const noUsersFound = this.props.matchedUsers && this.props.matchedUsers.length === 0 && lastWord.length > 1 && lastWord.charAt(0) === '@' ?
      <span>Sorry we are unable to find the user <span className={glob.error}>{lastWord}</span></span>
    : <span></span>

    const usersJsx = this.props.matchedUsers && this.props.matchedUsers.length > 0 ? (
      <ul style={{ left: cursorLoc }} className={glob.list_users}>
        {this.props.matchedUsers.map((user, index) => {
          const elClass = index === this.state.desired ? glob.desired : '';
          return (
            <li key={index} className={elClass}>
              <div className={`chip ${glob.chip}`}
                onClick={() => this.handleUserClick(user.username)}
              >
                <img src={user.avatar_url} alt={user.username} />
                {user.username} | {user.name}
              </div>
            </li>
          );
        })}
      </ul>)
    : <span></span>;

    return (
      <div id="comment-form">
        <div className={`card z-depth-0 ${glob.card}`}><div className="card-content">
          <div className={`row ${glob.no_margin}`}><div className="col s12">
            <input id="input-el"
              onChange={() => this.handleTextChange()}
              onKeyDown={(e) => this.handleKeyDown(e)}
              placeholder="Write a comment..."
              style={{ marginBottom: 0 }}
              value={this.props.inputText}
            ></input>
            <label htmlFor="input-el" style={{ display: 'none', float: 'left', clear: 'both', width: '100%' }}>Comment</label>
          </div></div>
          {usersJsx}
          {noUsersFound}
        </div></div>
        <div className={`row ${glob.no_margin}`}>
          <div className="col s6 m7 l10">
            <p className="grey-text text-lighten-1" style={{ marginTop: 0 }}>Start adding comments via the form above. Mention other users by typing their username or name.</p>
          </div>
          <div className="col s6 m5 l2">
            <button className="btn z-depth-0 right" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
