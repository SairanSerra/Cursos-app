import React, { useState} from 'react';
import  Icon  from 'react-native-vector-icons/Ionicons';
import xildemy from '../../../assets/xildemy.png';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles.js';

function logar() {
    alert('Logado com sucesso!')
}

const Login = ()=> {
    const {navigate} = useNavigation();
        
    
    const [passLogin, setPassLogin] =  useState(true);
    const [hidepass, setHidepass] =  useState(true);
    return (
        <Styled.Container>
                <Styled.Keybord behavior='padding'>

                    <Styled.StatusBar backgroundColor='#093366'/>

                    <Styled.Img source={xildemy}/>

                    <Styled.Title>Xildemy</Styled.Title>

                    <Styled.Input
                        placeholder='Email'
                        placeholderTextColor='#093366'                      
                    />
                    <Styled.Input
                        placeholder='Senha'
                        placeholderTextColor='#093366'
                        keyboardType='numeric' 
                        value={passLogin}
                        onchangeText={(value) => setPassLogin(value)}
                        secureTextEntry={hidepass}  
                        maxLength={8}                                        
                    />
                    <Styled.Olho onPress={()=>setHidepass(!hidepass)}>
                        {
                            hidepass ?
                            <Icon name="eye" size={25} color="#093366" />
                            :
                            <Icon name="eye-off" size={25} color="#093366" />
                        }
                    
                    </Styled.Olho>

                    <Styled.Login 
                    onPress={logar}>
                    <Styled.Texto>Login</Styled.Texto> 
                    </Styled.Login>

                    <Styled.EsqueciSenha onPress={()=>navigate('ResetPassword')}>
                    <Styled.TextEsqueci>Esqueci minha senha</Styled.TextEsqueci>
                    </Styled.EsqueciSenha>

                    <Styled.Create onPress={()=>navigate('Sign')}>
                    <Styled.TextCreate>Criar Conta</Styled.TextCreate>
                    </Styled.Create>

                </Styled.Keybord>
    
        </Styled.Container>
    )

}
export default Login;

