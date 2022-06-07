import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './routes/Navigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
