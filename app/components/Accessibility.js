import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { toggleParallax } from '../actions/actionCreators'
import PageHeader from 'prtls/PageHeader';
import glob from 'style';

/**
  *
  * Accessibility Page
  *
  * Includes actions to update accessibility preferences
  *
*/

const mapStateToProps = (state) => {
  return {
    parallax: state.accessibility.parallax
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onParallaxClick: (bool) => {
      dispatch(toggleParallax(bool))
    }
  }
}

class Accessibility extends React.Component {

  componentDidMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  handleParallaxClick(event) {
    this.props.onParallaxClick();
  }

  render() {

    const parallaxBtnTxt = this.props.parallax ? 'Disable' : 'Enable';
    const parallaxEnabled = this.props.parallax ? true : false;

    return (
      <div>
        <PageHeader header="Accessibility" />
        <div className="section">
          <div className="container">
            <div className="row">
              <h2 className="col s12 grey-text text-lighten-3">Site Settings</h2>
            </div>
            <div className="row dark-bg">
                  <div className="col s12">
                    <div className={`card z-depth-0 ${glob.card} ${glob.light_bg}`}><div className="card-content">
                      <h5 style={{ marginTop: 0 }}>Parallax Scrolling</h5>
                      <p>When the background moves slower than the foreground. Read more about parallax at <a href="https://en.wikipedia.org/wiki/Parallax_scrolling" target="_BLANK" rel="noopener">Wikipedia</a>.</p>
                      <br/>
                      <div className={`switch ${glob.switch}`}>
                        <label>
                          Off
                          <input type="checkbox" checked={parallaxEnabled} onClick={() => this.handleParallaxClick()} />
                          <span className={`lever ${glob.lever}`}></span>
                          On
                        </label>
                      </div>
                    </div></div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accessibility);
