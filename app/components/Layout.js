import React from 'react';
import Footer from 'prtls/footer.js';
import Nav from 'prtls/Nav.js';
import { Route } from 'react-router-dom';
import glob from 'style';

export default ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className={glob.layout}>
        <Nav />
        <div className={glob.yield}>
          <Component {...matchProps} />
        </div>
        <Footer />
      </div>
    )} />
  )
};
