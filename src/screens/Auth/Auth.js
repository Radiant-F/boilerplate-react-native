import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authReducers} from '../../redux/reducers/auth';
import {AUTH_TYPE} from '../../redux/ActionTypes';
import {login} from '../../redux/actions/auth';

export default function Auth({navigation}) {
  const {is_login, status} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: '', password: ''});

  return (
    <View>
      <Text>Auth</Text>
      <Text>{is_login ? 'Login' : 'Register'}</Text>
      <TextInput
        placeholder="email"
        onChangeText={email => setFormData({...formData, email})}
      />
      <TextInput
        placeholder="password"
        onChangeText={password => setFormData({...formData, password})}
      />
      <Button
        title="sign in"
        onPress={() => dispatch(login({formData, navigation}))}
      />
      <Text>{status}</Text>
      <Button
        title="change auth type"
        onPress={() => dispatch(authReducers({type: AUTH_TYPE}))}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
