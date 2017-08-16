import React from 'react';
import glob from 'style';

export default () => {
  return (
    <footer className={`page-footer blue-grey darken-4 ${glob.dark_bg}`}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="grey-text text-lighten-4">Footer</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container">
          Created by <a className="grey-text" href="https://jlawshe.com" target="_BLANK" rel="noopener">Jessica Lawshe</a>
        </div>
      </div>
    </footer>
  );
}
