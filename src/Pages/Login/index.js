import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import xildemy from '../../../assets/xildemy.png';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/base';
import {Auth} from '../../context/Auth';
import Toast from 'react-native-toast-message';
import api from '../../services/api';

import * as Styled from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const {navigate} = useNavigation();

  const [passLogin, setPassLogin] = useState('');
  const [hidepass, setHidepass] = useState(true);
  const [emaillogin, setEmailLogin] = useState('');

  const {setToken} = useContext(Auth);

  async function logar() {
    try {
      const response = await api.post('/login', {
        email: emaillogin,
        password: passLogin,
        device_name: 'teste',
      });

      if (response.data.success == false) {
        throw new Error(response.data.menssage);
      }

      await AsyncStorage.setItem('token', JSON.stringify(response.data.token));

      const token = await AsyncStorage.getItem('token');
      console.log(token);

      setToken(token);

      navigate('Home');
    } catch (e) {
      if (e.response.status == 401) {
        return Toast.show({
          type: 'error',
          text1: e.response.data.message,
        });
      }

      Toast.show({
        type: 'error',
        text1: e.message,
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.Keybord behavior="padding">
        <Styled.View>
          <Styled.StatusBar backgroundColor="#093366" />

          <Styled.Img source={xildemy} />

          <Styled.Title>Xildemy</Styled.Title>

          <Input
            placeholder="Email"
            style={style.input}
            value={emaillogin}
            placeholderTextColor="#FFFFFF"
            onChangeText={value => setEmailLogin(value)}
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            keyboardType="numeric"
            value={passLogin}
            style={style.input}
            onChangeText={value => setPassLogin(value)}
            secureTextEntry={hidepass}
            maxLength={8}
            rightIcon={
              <Styled.Olho onPress={() => setHidepass(!hidepass)}>

                {passLogin.length >= 1 ? (
                    
                  hidepass ? (
                    <Icon name="eye" size={25} color="#FFFFFF" />
                  ) : (
                    <Icon name="eye-off" size={25} color="#FFFFFF" />
                  )
                ) : (
                  ''
                )}
              </Styled.Olho>
            }
          />

          <Styled.Login onPress={logar}>
            <Styled.Texto>Login</Styled.Texto>
          </Styled.Login>

          <Styled.EsqueciSenha onPress={() => navigate('ResetPassword')}>
            <Styled.TextEsqueci>Esqueci minha senha</Styled.TextEsqueci>
          </Styled.EsqueciSenha>

          <Styled.Create onPress={() => navigate('Sign')}>
            <Styled.TextCreate>Criar Conta</Styled.TextCreate>
          </Styled.Create>
        </Styled.View>
      </Styled.Keybord>
    </Styled.Container>
  );
};

const style = StyleSheet.create({
  input: {
    color: '#FFFF',
    borderBottomColor: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Login;
