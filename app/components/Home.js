import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Intro from 'prtls/Intro.js';
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
        <div className={`section ${glob.no_pad} green darken-4`}>
          <div className={`row ${glob.no_margin}`}>
            <div className={`col s12 light-green darken-4 ${glob.pad_lg}`}>
              <h4 className="grey-text text-lighten-4" style={{ marginTop: '0' }}>Subheader</h4>
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
