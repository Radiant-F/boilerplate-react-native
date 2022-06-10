import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Dashboard from './screens/Dashboard';

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
