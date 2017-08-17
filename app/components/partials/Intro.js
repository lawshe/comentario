import React from 'react';
import glob from 'style';

class Intro extends React.Component {

  componentDidMount() {
    // Accessibility
    if (this.props.parallax) {
      $('.parallax').parallax();
    }
  }

  render() {
    return (
      <div className={`parallax-container valign-wrapper ${glob.parallax_container}`}>
        <div className="section" style={{width: '100%', zIndex: 1}}>
          <div className="container">
            <br /><br />
            <div className="row center">
              <h1 className="header grey-text text-lighten-5" style={{ marginBottom: 0 }}>
                Comentario
              </h1>
              <h2 className="header grey-text text-lighten-2" style={{ fontWeight: 'normal', marginBottom: 0 }}>
                A commenting system
              </h2>
            </div>
          </div>
        </div>
        <picture className={`parallax valign-wrapper ${glob.parallax}`}>
          <source srcSet="/public/images/bg/abstract.webp" type="image/webp" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
          <source srcSet="/public/images/bg/abstract.png" type="image/jpg" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
          <img src="/public/images/bg/abstract.png" alt="Parallax background" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
        </picture>
      </div>
    )
  }
}

export { Intro as default}
