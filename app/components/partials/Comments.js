import React from 'react';
import glob from 'style';
import fxns from 'fxns';

class Comments extends React.Component {
  render() {
    const commentsJSX = this.props.comments && this.props.comments.length > 0 ? (
      <ul className="collection">
        {this.props.comments.reverse().map((comment, index) => {
          const prettyDate = fxns.prettyDate(comment.date);
          return (
            <li className="collection-item" key={`comment-${index}`}>
              <div className="grey-text">{prettyDate}</div>
              <p>{comment.text}</p>
            </li>
          );
        })}
      </ul>
    )
    : <p className="grey-text text-lighten-1">No comments yet. Please add one!</p>;

    return (
      <div clasName="section">
        <div className="container">
          <h3 className="grey-text text-lighten-5">Comments</h3>
          <div className="row"><div className="col s12">
            {commentsJSX}
          </div></div>
        </div>
      </div>
    );
  }
}

export { Comments as default}
