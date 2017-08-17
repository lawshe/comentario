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
        <div className="container">
          <br/>
          <h1 className="header grey-text text-lighten-5" style={{ margin: 0 }}>
            Comentario
          </h1>
          <h5 className="header grey-text text-lighten-2" style={{ fontWeight: 'normal', margin: 0 }}>
            A commenting system
          </h5>
          <br/>
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
