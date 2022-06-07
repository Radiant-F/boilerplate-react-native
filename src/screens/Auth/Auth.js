import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authReducers} from '../../redux/reducers/auth';
import {AUTH_TYPE} from '../../redux/ActionTypes';

export default function Auth() {
  const {is_login} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Auth</Text>
      <Text>{is_login ? 'Login' : 'Register'}</Text>
      <Button
        title="change auth type"
        onPress={() =>
          dispatch(authReducers({type: AUTH_TYPE, payload: !is_login}))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
