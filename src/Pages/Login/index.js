import React from 'react';
import { Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import xildemy from '../../../assets/xildemy.png';
import * as Styled from './styles.js';
function logar() {
    alert('Logado com sucesso!')
}

const login = ()=> {
    return (
        <Styled.Container>
                <Styled.Keybord behavior='padding'>
                    <Styled.Img source={xildemy}/>
                    <Styled.Input
                        placeholder='Email'
                        placeholderTextColor='#093366'                      
                    />
                    <Styled.Input
                        placeholder='Senha'
                        placeholderTextColor='#093366'
                        keyboardType='numeric'                     
                    />
                    <Styled.Button 
                    onPress={logar}>
                    <Styled.Texto>Login</Styled.Texto> 
                    </Styled.Button>
                </Styled.Keybord>
    
        </Styled.Container>
    )

}
export default login;

