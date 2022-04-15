import React from 'react';
import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Navigator from './routes/Navigator';
import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
