import React from 'react';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import NotFound from './components/NotFound.js';
import Accessibility from './components/Accessibility.js';

export default (
  <div>
    <Layout exact path="/" component={Home} />
    <Layout path="/accessibility" component={Accessibility} />
  </div>
)
