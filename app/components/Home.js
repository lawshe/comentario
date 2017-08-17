import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Intro from 'prtls/Intro.js';
import InputText from 'prtls/InputText.js';
import glob from 'style';

/**
  *
  * Homepage
  *
  * User accessibility preferences set in state
  *
*/

const mapStateToProps = (state) => {
  return {
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
        <div className={`section ${glob.no_pad} green darken-4 container`}>
          <div className={`row ${glob.no_margin} ${glob.pad_md}`}>
            <div className={`col s12 `}>
              <InputText />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
