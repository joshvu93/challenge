import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import store from './rootStore';

render(
    <Provider store={ store }>
      <Dashboard />
    </Provider>,
    document.getElementById('root'));
