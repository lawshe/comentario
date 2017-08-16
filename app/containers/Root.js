import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import browserHistory from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import Routes from '../routes.js';

const history = createBrowserHistory();

class Root extends React.Component {
  componentDidMount() {
    $('.loading').css('display', 'none');
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>
          {Routes}
        </ConnectedRouter>
      </Provider>
    )
  }
}

export { Root as default}
