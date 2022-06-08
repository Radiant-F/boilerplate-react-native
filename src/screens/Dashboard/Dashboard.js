import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function Dashboard() {
  const {user_data} = useSelector(state => state.auth);
  console.log(user_data);
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
