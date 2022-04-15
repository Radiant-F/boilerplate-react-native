import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {Login, Register} from '../../components/export';
import {useDispatch, useSelector} from 'react-redux';
import {AUTH_TYPE} from '../../redux/actionTypes';

export default function Auth() {
  const dispatch = useDispatch();
  const {auth_type} = useSelector(state => state.auth);

  return (
    <View>
      <Text>Auth</Text>
      {auth_type == 'login' ? <Login /> : <Register />}
      <Button
        title="change auth type"
        onPress={() =>
          dispatch({
            type: AUTH_TYPE,
            payload: auth_type == 'login' ? 'register' : 'login',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
