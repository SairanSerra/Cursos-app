import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import xildemy from '../../../assets/xildemy.png';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/base';
import api from '../../services/api';
import Toast from 'react-native-toast-message'
import axios from 'axios';

import * as Styled from './styles.js';



const Login = ()=> {

    const {navigate} = useNavigation();
        
    
    const [passLogin, setPassLogin] =  useState('');
    const [hidepass, setHidepass] =  useState(true);
    const [emaillogin,setEmailLogin] = useState('');

    function teste(){
        // console.log('tesdte');
       
    }

    async function logar() {
        
        
      }
    
    return (
        <Styled.Container>
                <Styled.Keybord behavior='padding'>

                    <Styled.StatusBar backgroundColor='#093366'/>

                    <Styled.Img source={xildemy}/>

                    <Styled.Title>Xildemy</Styled.Title>

                    <Input
                        placeholder='Email'
                        style={style.input}
                        value={emaillogin}
                        placeholderTextColor='#FFFFFF'  
                        onChangeText={(value)=> setEmailLogin(value)}                    
                    />
                    <Input
                        placeholder='Senha'
                        placeholderTextColor='#FFFFFF'
                        keyboardType='numeric' 
                       value={passLogin}
                        style={style.input}
                        onChangeText={(value) => setPassLogin(value)}
                        secureTextEntry={hidepass}  
                        maxLength={8}
                        rightIcon={
                            <Styled.Olho onPress={()=>setHidepass(!hidepass)}>
                        {
                            
                            hidepass ?
                            <Icon name="eye" size={25} color="#FFFFFF" />
                            :
                            <Icon name="eye-off" size={25} color="#FFFFFF" />
                        }
                    
                    </Styled.Olho>
                        }                                        
                    />                    

                    <Styled.Login 
                    onPress={logar}>
                    <Styled.Texto>Login</Styled.Texto> 
                    </Styled.Login>

                    <Styled.EsqueciSenha onPress={()=>navigate('Home')}>
                    <Styled.TextEsqueci>Esqueci minha senha</Styled.TextEsqueci>
                    </Styled.EsqueciSenha>

                    <Styled.Create onPress={()=>navigate('Sign')}>
                    <Styled.TextCreate>Criar Conta</Styled.TextCreate>
                    </Styled.Create>

                </Styled.Keybord>
    
        </Styled.Container>
    )

}

const style = StyleSheet.create({
    input:{
        color: '#FFFF',
        borderBottomColor:'#FFFFFF',
        textAlign:'center',
       
    },
})

export default Login;

