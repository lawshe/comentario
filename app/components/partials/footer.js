import React from 'react';
import glob from 'style';

export default () => {
  return (
    <footer className={`page-footer blue-grey darken-4 ${glob.dark_bg}`}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5 className="grey-text text-lighten-4">Comentario</h5>
            <p className={`grey-text text-lighten-3 ${glob.no_margin}`}>A commenting system</p>
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
