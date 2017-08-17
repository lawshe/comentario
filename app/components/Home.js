import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Comments from 'prtls/Comments.js';
import Intro from 'prtls/Intro.js';
import InputText from 'prtls/InputText.js';
import glob from 'style';
import fxns from 'fxns';

/**
  *
  * Homepage
  *
  * User accessibility preferences set in state
  *
*/

const mapStateToProps = (state) => {
  return {
    comments: state.input.comments,
    parallax: state.accessibility.parallax
  }
}

class Home extends React.Component {

  componentDidMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <Intro parallax={this.props.parallax} />
        <div className={`section container ${glob.pad_md_top}`}>
          <h3 className="header grey-text text-lighten-5" style={{ fontWeight: 'normal', marginTop: 0 }}>Add a Comment</h3>
          <div className={`row ${glob.no_margin}`}>
            <div className={`col s12 `}>
              <InputText />
            </div>
          </div>
        </div>
        <Comments comments={this.props.comments} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
