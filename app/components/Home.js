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
    const commentsJSX = this.props.comments && this.props.comments.length > 0 ? (
      <div className={`section container`}>
        <div className="row"><div className="col s12">
          <h3 className="header grey-text text-lighten-5" style={{ fontWeight: 'normal', marginTop: 0 }}>Comments</h3>
          <ul className="collection">
            {this.props.comments.map((comment, index) => {
              return (
                <li className="collection-item" key={`comment-${index}`}>
                  {comment}
                </li>
              );
            })}
          </ul>
        </div></div>
      </div>)
    : <span></span>;

    return (
      <div>
        <Intro parallax={this.props.parallax} />
        <div className={`section container ${glob.pad_md_top_btm}`}>
          <h3 className="header grey-text text-lighten-5" style={{ fontWeight: 'normal', marginTop: 0 }}>Add a Comment</h3>
          <div className={`row ${glob.no_margin}`}>
            <div className={`col s12 `}>
              <InputText />
            </div>
          </div>
        </div>
        {commentsJSX}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
