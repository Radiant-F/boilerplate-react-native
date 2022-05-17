import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {Login, Register} from '../../components/exports';
import {useDispatch, useSelector} from 'react-redux';
import {isLogin} from '../../redux/reducers/auth';

export default function Auth() {
  const dispatch = useDispatch();
  const {is_login, user_data} = useSelector(state => state.auth);

  return (
    <View>
      <Text>Auth</Text>
      {is_login ? <Login /> : <Register />}
      <Button
        title="ubah cara masuk"
        onPress={() => dispatch(isLogin(!is_login))}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
