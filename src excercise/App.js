import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Dashboard from './screens/Dashboard';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

const styles = StyleSheet.create({});
