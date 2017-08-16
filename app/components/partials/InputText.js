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
    inputText: state.input.input_text
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
  }

  handleTextChange() {
    const textValue = document.getElementById('textarea1').value;
    this.props.onTextChange(textValue);
  }

  render() {
    return (
      <div className="card"><div className="card-content">
        <textarea className="materialize-textarea" id="textarea1" onChange={() => this.handleTextChange()}>{this.props.inputText}</textarea>
        <label htmlFor="textarea1">Text Input</label>
      </div></div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
