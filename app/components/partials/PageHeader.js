import React from 'react';
import glob from 'style';

export default (props) => {
  return (
    <div className={`section ${glob.page_header}`}>
      <div className="container">
        <h1>{props.header}</h1>
      </div>
    </div>
  );
}
